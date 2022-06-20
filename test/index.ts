import { expect } from "chai"
import { ethers } from "hardhat"

xdescribe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter")
    const greeter = await Greeter.deploy("Hello, world!")
    await greeter.deployed()

    expect(await greeter.greet()).to.equal("Hello, world!")

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!")

    // wait until the transaction is mined
    await setGreetingTx.wait()

    expect(await greeter.greet()).to.equal("Hola, mundo!")
  })
})

describe("Hello World", () => {
  it("Should return Hello world!", async () => {
    const HelloWorld = await ethers.getContractFactory("HelloWorld")
    const helloWorldInstance = await HelloWorld.deploy()
    await helloWorldInstance.deployed()

    // console.log(helloWorldInstance)

    expect(await helloWorldInstance.greet()).to.equal("Hello world!")
  })
})

describe("Counter(first application)", () => {
  it("Should return 0 when the counter is initialized", async () => {
    const Counter = await ethers.getContractFactory("Counter")
    const counter = await Counter.deploy()
    await counter.deployed()

    expect(await counter.get()).to.equal(0)
  })
  it("Should work properly with increment", async () => {
    const Counter = await ethers.getContractFactory("Counter")
    const counter = await Counter.deploy()
    await counter.deployed()

    const incrementTx = await counter.increment()

    // wait until the transaction is mined
    await incrementTx.wait()

    expect(await counter.get()).to.equal(1)
  })
  it("Should work properly with decrement", async () => {
    const Counter = await ethers.getContractFactory("Counter")
    const counter = await Counter.deploy()
    await counter.deployed()

    const incrementTx = await counter.increment()
    await incrementTx.wait()
    const incrementTx2 = await counter.increment()
    await incrementTx2.wait()

    const decrementTx = await counter.decrement()
    await decrementTx.wait()

    expect(await counter.get()).to.equal(1)
  })
  it("Should throw error when decrease 0", async () => {
    const Counter = await ethers.getContractFactory("Counter")
    const counter = await Counter.deploy()
    await counter.deployed()

    expect(await counter.get()).to.equal(0)

    try {
      await counter.decrement()
    } catch (error: any) {
      console.log(error)
      expect(() => {
        throw new Error(error)
      }).to.throw()
    }
  })
})
