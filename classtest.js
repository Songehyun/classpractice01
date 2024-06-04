class KimchiJjigae {
  constructor(foodList, water) {
    this.foodList = foodList;
    this.water = water;
  }

  get foodList() {
    return this._foodList;
  }

  set foodList(newFoodList) {
    if (Array.isArray(newFoodList) === false) {
      throw new Error("foodLsit는 배열이어야 합니다.");
    }
    newFoodList.forEach((item) => {
      if (typeof item !== "string") {
        throw new Error("foodLsit 배열의 원소는 문자열이어야 합니다.");
      }
      if (item === "통조림참치" || item === "햄") {
        throw new Error("김치찌개의 정통성이 무너졌습니다. 다시 작성해주세요");
      }
    });
    this._foodList = newFoodList;
  }

  get water() {
    return this._water;
  }

  set water(newWater) {
    if (typeof newWater !== "number") {
      throw new Error("water는 숫자여야 합니다.");
    }
    this._water = newWater;
  }

  cook() {
    console.log("김치찌개 만드는 방법 :");
    console.log("1. 냄비에 물을 붓고 끓입니다.");
    console.log("2. 물이 끓으면 김치와 돼지고기를 넣습니다.");
    console.log("3. 재료가 익으면 파와 두부를 넣고 더 끓입니다.");
    console.log("4. 소금과 고춧가루로 간을 맞춥니다.");
    console.log("5. 완성된 김치찌개를 맛있게 드세요!");
  }
}

const ingredients = ["김치", "돼지고기", "두부", "파"];
const waterAmount = 1000;

const myKimchiJjigae = new KimchiJjigae(ingredients, waterAmount);

console.log("초기 재료 :", myKimchiJjigae.foodList);
console.log("초기 물의 양 :", myKimchiJjigae.water);

myKimchiJjigae.foodList = ["김치", "돼지고기", "두부", "파", "양파"];
myKimchiJjigae.water = 1200;

console.log("변경된 재료 :", myKimchiJjigae.foodList);
console.log("변경된 물의 양 :", myKimchiJjigae.water);

myKimchiJjigae.cook();
