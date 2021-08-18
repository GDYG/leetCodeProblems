function defangIPaddr(address: string): string {
    return address.split('.').join('[.]')
};

console.log(defangIPaddr("1.1.1.1"))