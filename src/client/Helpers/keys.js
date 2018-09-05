class Keys {
  value = 0;

  get next() {
    this.value += 1;
    return this.value;
  }
}

const instance = new Keys();

export default instance;
