function func() {
    navigator.bluetooth.requestDevice(
        { acceptAllDevices: true },
        {name: 'ExampleName'},
        );
}
