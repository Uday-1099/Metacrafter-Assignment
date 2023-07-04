// Step 1: Create a variable to hold the NFTs
const nftCollection = [];
// Step 2: mintNFT function to create and store NFTs
function mintNFT(name, eyeColor, shirtType, bling) {
 const nft = {
 name: name,
 eyeColor: eyeColor,
 shirtType: shirtType,
 bling: bling
 };
 
 nftCollection.push(nft);
}
// Step 3: listNFTs function to print NFT metadata
function listNFTs() {
 console.log('NFT Details:');
 
 for (let i = 0; i < nftCollection.length; i++) {
 const nft = nftCollection[i];
 console.log('Name:', nft.name);
 console.log('Eye Color:', nft.eyeColor);
 console.log('Shirt Type:', nft.shirtType);
 console.log('Bling:', nft.bling.join(', '));
 console.log('--------------------');
 }
}
// Step 4: getTotalSupply function to return the number of NFTs
function getTotalSupply() {
 return nftCollection.length;
}
// Call the functions to test
mintNFT('Epic Character 1', 'blue', 'hoodie', ['gold chain', 'diamond ring']);
mintNFT('Epic Character 2', 'green', 't-shirt', ['silver necklace', 'ruby earrings']);
mintNFT('Epic Character 3', 'brown', 'sweater', ['platinum bracelet', 'emerald watch']);
listNFTs();
console.log('Total Supply:', getTotalSupply());
