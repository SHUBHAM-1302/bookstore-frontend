import { Injectable } from '@angular/core';
import EscPosEncoder from 'esc-pos-encoder';

@Injectable({
  providedIn: 'root'
})
export class KBWebUSBPrintService {
  private device: any | null = null;
  private devices: any | null = null;
  encoder = new EscPosEncoder();

  constructor() {}

  // Request a USB device (filtered by vendorId or other criteria)
  async requestDevice(productFamily:string): Promise<void> {
    try {
        this.devices = await (navigator as any).usb.getDevices();
        if(this.devices == null || this.devices.length == 0){
            this.device = await (navigator as any).usb.requestDevice({
                    filters: [{ productName: productFamily }] // Replace with your printer's vendorId
            });
        }else{
          this.device = this.devices.filter((device) => device.productName == productFamily)[0];
          if(this.device == null ){
            this.device = await (navigator as any).usb.requestDevice({
              filters: [{ productName: productFamily }] // Replace with your printer's vendorId
            });
          }  
          
        }
    } catch (error) {
      console.error('Error requesting USB device:', error);
      throw error;
    }
  }

  // Open and claim the USB interface
  async openDevice(): Promise<void> {
    this.devices = await (navigator as any).usb.getDevices();
    this.device = this.devices[0];
    if (!this.device) {
      throw new Error('No device selected.');
    }
    try {
      await this.device.open();
      if (this.device.configuration === null) {
        await this.device.selectConfiguration(1); // Select default configuration
      }
      await this.device.claimInterface(0); // Claim the printer's interface
    } catch (error) {
      console.error('Error opening the device:', error);
      throw error;
    }
  }

  // Send data to the printer (e.g., Hello World)
  async sendPrintData(encodedPOSText: any): Promise<void> {
    if (!this.device) {
      throw new Error('No device selected.');
    }
    try {
      // Send data to endpoint 1 (replace with correct endpoint for your device)
      await this.device.transferOut(this.device.configuration.interfaces[0]?.alternate.endpoints.find((obj: any) => obj.direction === 'out').endpointNumber, encodedPOSText);
      //console.log('Data sent to the device:', message);
    } catch (error) {
      console.error('Error sending data:', error);
      throw error;
    }
  }

  // Close the device after use
  async closeDevice(): Promise<void> {
    if (this.device) {
      await this.device.close();
      //await this.device.forget();
      this.device = null;
    }
  }
}
