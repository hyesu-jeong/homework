# Tic-Tac-Toe 게임 (with React)

### 게임 기본 규칙

1. 게임판: 3x3 그리드로 구성됩니다.
2. 플레이어의 역할: 두 플레이어가 경쟁하며 한 사람은 "🤖"를, 다른 사람은 "🎃"를 사용합니다.
3. 게임 진행: 플레이어는 차례로 번갈아가며 빈칸에 기호를 배치합니다.
4. 승리 방법: 플레이어는 연속으로 세 개의 기호를 배치하여 승리합니다.
5. 무승부: 모든 칸이 차 있고 아무도 세 개의 기호를 연속으로 배치하지 못하면 게임은 무승부로 간주됩니다.
6. 우측 히스토리 버튼으로 게임을 처음 혹은 중간단계로 되돌릴 수 있습니다.

### 환경 구성

react, vite, prop-types, css module

### 컴포넌트 분리

```
├── main.jsx
├── Game.jsx
├── components
│   ├── Board
│   │   ├── Board.jsx
│   │   └── Board.module.css
│   ├── History
│   │   ├── History.jsx
│   │   └── History.module.css
│   ├── Square
│   │   ├── Square.jsx
│   │   └── Square.module.css
│   ├── Squares
│   │   ├── Squares.jsx
│   │   └── Squares.module.css
│   └── Status
│       ├── Status.jsx
│       └── Status.module.css
```

### 상태 관리

- **squares** 게임 보드 각 칸의 상태를 나타내는 배열로 게임의 현재 상태와 승리 조건을 판단하는 역할을 합니다.
- **currentPlayer** 현재 플레이어가 누구인지 "🤖" 또는 "🎃"을 나타내는 상태를 나타냅니다.
  ```javascript
  currentPlayer ? 🤖 : 🎃
  ```
- **winnerInfo** 게임에서 승리 조건을 충족했을 때 업데이트되며 현재 게임에서 승자가 있는지 확인하고 그 정보를 저장하여 게임의 종료과 결과를 관리합니다.
  ```javascript
  {
  winner: '🤖', // 또는 '🎃'
  condition: [0, 1, 2] // 승리 조건(인덱스) 배열
  }
  ```
- **isDraw** 게임 보드가 모두 채워졌지만, 승자가 없을 때 true로 설정되어 무승부 상태를 나타냅니다.
  ```javascript
  if (!newWinnerInfo) {
    setIsDraw(newSquares.every(Boolean));
  }
  ```
- **history**

  - **게임 진행 기록** : 매 턴마다 squares 배열의 상태를 복사하여 history에 추가함으로써, 게임 진행 중의 상태 변화를 기록합니다.
    ```javascript
    setHistory([...history, newSquares]);
    ```
  - **턴 되돌리기** : history에 저장된 이전 상태를 선택하여 해당 턴으로 되돌아갈 수 있습니다. 사용자가 특정 턴의 기록을 선택하면, 그 턴의 보드 상태가 squares로 복원되고, 이후의 기록은 삭제됩니다.

    ```javascript
    setSquares([...history[index]]);
    setHistory(history.slice(0, index + 1));
    setWinnerInfo(calculateWinner([...history[index]]));
    ```

  - **게임 초기화** : history 상태를 초기화하면, 게임을 처음부터 다시 시작할 수 있습니다. 이 경우, history 상태는 빈 배열로 재설정되며, squares도 초기화됩니다.
    ```javascript
    <button
      type="button"
      onClick={() => {
        setSquares(INITIAL_SQUARES);
        setHistory([]);
        setWinnerInfo(null);
      }}>
      게임 시작
    </button>
    ```

### 구현 결과

![tictactoe](https://github.com/user-attachments/assets/f6955cef-c8d3-43d3-a0f2-9efbfd1c8deb)

### 후기

- 강의시간에 이미 전체 과정을 한 번 봤지만, 처음 접하는 느낌으로 작은 컴포넌트에서 상태를 만들면서 작업했는데 결국 다른 컴포넌트에서도 상태 공유가 필요해지면서 중간중간 상태를 끌어올리는 작업이 필요했습니다.
- 상태를 끌어올리면서 props 전달하는 뎁스가 깊어졌는데 더 효율적인 방법이 있을지 궁금합니다.
- 여전히 자바스크립트 부족함을 많이 느끼고 있습니다.
