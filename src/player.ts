// プレイヤーの移動処理

import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useThree } from "@react-three/fiber";

function player() {
    let speed = 0.1;

    // カメラを取得
    const { camera } = useThree();

    // キーが押されているかどうかを保持
    let keyA = false;
    let keyD = false;
    let keyW = false;
    let keyS = false;

    // キーが押されたらtrue、離されたらfalseにする
    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "a":
                    keyA = true;
                    break;
                case "d":
                    keyD = true;
                    break;
                case "w":
                    keyW = true;
                    break;
                case "s":
                    keyS = true;
                    break;
            }
        });
        window.addEventListener("keyup", (e) => {
            switch (e.key) {
                case "a":
                    keyA = false;
                    break;
                case "d":
                    keyD = false;
                    break;
                case "w":
                    keyW = false;
                    break;
                case "s":
                    keyS = false;
                    break;
            }
        });
    });

    // キーの状態をカメラの動きに反映
    useFrame(() => {
        const direction = new Vector3()

        // 前後左右の移動方向を計算
        if (keyW) direction.z -= speed;
        if (keyS) direction.z += speed;
        if (keyA) direction.x -= speed;
        if (keyD) direction.x += speed;

        // カメラの回転を考慮
        direction.applyQuaternion(camera.quaternion);

        // 高さの移動方向を制限
        direction.y = 0;

        // カメラの位置を更新
        camera.position.add(direction);
    });
}

export default player;