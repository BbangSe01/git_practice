// view.js
export class View {
    // 주문 가능한 상품 목록 출력 함수
    displayAvailableItems(items) {
      let count=1;
      console.log("주문 가능한 상품:");
      Object.entries(items).forEach(([name, price]) => {
        console.log(`${count}. ${name}: ${price.toLocaleString()}원`);
        count++;
      });
    }
  }
  