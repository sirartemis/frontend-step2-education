const cleaveMixin = {
  cleaveInput(options = {}) {
    this.input.cleave({ ...options });
  }
}

export default cleaveMixin;
