import web3 from "../web3";
import WakaCoins from "../smartContract/WakaCoins.json";

let instance = null;
try {
  instance = new web3.eth.Contract(
    JSON.parse(WakaCoins),
    "0x929972d00371396c96107e87598EF52eeb9ef352"
  );
} catch (error) {
  instance = null;
  console.log(error);
}

export default instance;