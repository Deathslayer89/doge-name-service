const main=async ()=>{
  const domainContractFactory=await ethers.getContractFactory("Domains");
  const domainContract=await domainContractFactory.deploy("swan");
  await domainContract.deployed();
  console.log("contract deployed to :",domainContract.address);

  const tx=await domainContract.register("john",{value:hre.ethers.utils.parseEther('0.1')});
  await tx.wait();

  const balance=await hre.ethers.provider.getBalance(domainContract.address);
  console.log("balance of domain contract:",ethers.utils.formatEther(balance));



 try{
  txn=await domainContract.connect(supercoder).withdraw();
  await txn.wait();
 }catch(err){
  console.log("could not rob the contract ");
 }

 let ownerBalance=await hre.ethers.provider.getBalance(owner.address);
  console.log("balance of owner:",ethers.utils.formatEther(ownerBalance));

  txn=await domainContract.connect(owner).withdraw();
  await txn.wait();

  balance=await hre.ethers.provider.getBalance(domainContract.address);
  ownerBalance=await hre.ethers.provider.getBalance(owner.address);
  console.log("balance of domain contract:",ethers.utils.formatEther(balance));
  console.log("balance of owner:",ethers.utils.formatEther(ownerBalance));





};
const runMain=async ()=>{

  try{
    await main();
    process.exit(0);
  }catch(err){
    console.log(err);
    process.exit(1);
  }
}
runMain();