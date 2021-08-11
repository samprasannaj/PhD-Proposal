#include <Q2HX711.h>
#include<BluetoothSerial.h>

#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif

BluetoothSerial AndroidBT;

const byte hx711_data_pin = 26;
const byte hx711_clock_pin = 25;

Q2HX711 hx711(hx711_data_pin, hx711_clock_pin);
float zero;
float numb;
float weight;
bool ready;
char loadswitch;

void loadcellRead(){ 
  delay(100);
  weight = (zero - hx711.read());
  numb = (weight/5000);
  AndroidBT.println(numb,2);
  Serial.println(numb, 2);
  delay(100);
  if (AndroidBT.available()>0){
    loadswitch = AndroidBT.read();
    Serial.println("loadcellRead 1: ");
  Serial.write(loadswitch);
  }

}

void setup() {
  Serial.begin(115200);
  AndroidBT.begin("eGripper-00"); //Bluetooth device name
  Serial.println("The device started, now you can pair it with bluetooth!");
  delay(100);
  zero = hx711.read();
  zero = hx711.read();
  Serial.print("Zero:");
  Serial.println(zero);
  ready = false;
 
}

void loop() {
  
  
  // if (Serial.available()>0) {
  //   AndroidBT.write(Serial.read());
  // }
  if (AndroidBT.available()>0) {
    loadswitch = AndroidBT.read();
    //Serial.write(loadswitch);
    while(loadswitch == 'a'){
      loadcellRead();
      if (loadswitch == 'b'){
        break;
      }
    }
  }
  delay(20);
  
}



