let displayName: string = "Jess's standing desk";
let inventoryType: string = "Funiture";
let trackingNumber: string = "FD12345";
let createDate: Date = new Date();
let originalCost: number = 425;

interface InventoryItem {
  displayName: string;
  inventoryType: string;
  trackingNumber: string;
  createDate: Date;
  originalCost: number;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);
