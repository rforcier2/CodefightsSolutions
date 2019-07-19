const isIPv4Address = inputString => {
    // create Regex to check for valid iPv4 Address:
    let isValidIpv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/gm;
    // Test the inputString for passing our test
    return isValidIpv4.test(inputString);
}
