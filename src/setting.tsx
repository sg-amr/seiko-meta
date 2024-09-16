class SettingData {
  user: {
    accountExit: boolean,
    mail: string | null,
    password: string | null,
    token: string | null,
    timestamp: number | null
  }
  mode: {
    viewport: string,
    version: string,
    positioin: string
  }
  operate: {
    viewport: string,
    movement: string,
    viewportSensi: number,
    movementSensi: number,
    shiftDash: boolean
  }
  auth: {
    type: string
  }
  world: {
    version: string
  }
  constructor() {
    this.user = {
      accountExit: false,
      mail: null,
      password: null,
      token: null,
      timestamp: null
    };
    this.mode = {
      viewport: "first-person",
      version: "sf",
      positioin: "first-person"
    };
    this.operate = {
      viewport: "touch",
      movement: "botton",
      viewportSensi: 100,
      movementSensi: 100,
      shiftDash: false
    };
    this.auth = {
      type: "client"
    };
    this.world = {
      version: "sf"
    };
  }
  get() {
    return this;
  }
  init(device: "smartphone" | "tablet" | "pc") {
    // デバイスごとに設定のテンプレートを作る
    if (device === "smartphone") {
      this.operate.viewport = "touch";
      this.operate.viewportSensi = 100;
    } else if (device === "tablet") {
      this.operate.viewport = "touch";
      this.operate.viewportSensi = 100;
    } else {
      this.operate.viewport = "mouse";
      this.operate.viewportSensi = 100;
    }
    return this;
  }
}

export default SettingData;