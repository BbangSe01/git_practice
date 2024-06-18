// shoppingmall.js
import fs from "fs";
import readline from 'readline';

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let check=0;
export class ShoppingMall {
  constructor() {
    this.items = this.loadItems(); // loadItems() 메서드 이용하여 json파일의 데이터를 받아옴
  }

  loadItems() {
    try {
      const data = fs.readFileSync("./items.json", "utf8");
      return JSON.parse(data);
    } catch (err) {
      console.error("상품을 불러오는 중 오류가 발생했습니다:", err);
      return [];
    }
  }

  buyItems(){

    r1.question('주문할 상품을 입력하세요 >', (answer) => {
      return answer;
    })
    r1.close();
  }

  checkproduct(ans){
    for (let i in this.items){
      if (ans===i){
        console.log(`${ans} : 아이템이 판매되었습니다.`);
      }
    }
  }
}

