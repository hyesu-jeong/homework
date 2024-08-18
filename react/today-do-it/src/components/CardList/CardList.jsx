import { useCallback, useEffect } from "react";
import pb from "../../api/pocketbase";
import { useGlobalStore } from "../../store/useGlobalStore";
import Card from "../Card/Card";

export default function CardList() {
  const list = useGlobalStore((state) => state.list);
  const todo = useGlobalStore((state) => state.todo);
  const done = useGlobalStore((state) => state.done);
  const archived = useGlobalStore((state) => state.archived);
  const currentTab = useGlobalStore((state) => state.currentTab);
  const setList = useGlobalStore((state) => state.setList);

  const fetchTodos = useCallback(async () => {
    try {
      // API 호출
      const response = await pb.collection("TodayDoIt").getFullList({
        sort: "-created",
      });

      // 응답 확인
      console.log("서버 응답:", response);

      // 데이터 검증 및 상태 업데이트
      if (
        Array.isArray(response) &&
        response.length > 0 &&
        Array.isArray(response[0].field)
      ) {
        setList(response[0].field);
      } else {
        console.error("서버에서 유효한 데이터를 가져오지 못했습니다.");
      }
    } catch (error) {
      // 에러 로그 추가
      console.error("데이터를 가져오지 못했습니다. 에러: ", error.message);
      if (error.response) {
        console.error("서버 응답 상태:", error.response.status);
        console.error("서버 응답 데이터:", await error.response.text());
      }
      console.error(error.stack);
    }
  }, [setList]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div>
      {currentTab === "all" &&
        list.map((item, index) => (
          <Card key={item.id} item={item} index={index} />
        ))}

      {currentTab === "todo" &&
        todo.map((item, index) => (
          <Card key={item.id} item={item} index={index} />
        ))}

      {currentTab === "done" &&
        done.map((item, index) => (
          <Card key={item.id} item={item} index={index} />
        ))}

      {currentTab === "archived" &&
        archived.map((item, index) => (
          <Card key={item.id} item={item} index={index} />
        ))}
    </div>
  );
}
