const main=async()=>{
    const domainContractFactory=await hre.ethers.getContractFactory("Domains");
    const domainContract=await domainContractFactory.deploy("doge");
    await domainContract.deployed();
    console.log("contract deployed to :",domainContract.address);

    let tx=await domainContract.register("john",{value:hre.ethers.utils.parseEther('0.1')});
    await tx.wait();
    console.log("Minted domain john.doge");

    tx=await domainContract.setRecord("john","unknown");
    await tx.wait();

    const address=await domainContract.getAddress("john");
    console.log("address of domain john:",address);

    const balance =await hre.ethers.provider.getBalance(domainContract.address);
    console.log("balance of domain contract:",hre.ethers.utils.formatEther(balance));



}
const runMain=async()=>{
    try{
        await main();
        process.exit(0);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
runMain();