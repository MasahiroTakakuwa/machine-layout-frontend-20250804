// src/app/models/machine.model.ts

// 🇻🇳 Đây là interface định nghĩa cấu trúc dữ liệu máy
// 🇯🇵 このインターフェースは機械データの構造を定義します
export interface Machine {
  machine_no: number;       // 🇻🇳 Tên hoặc mã máy
                            // 🇯🇵 機械の名前または番号

  x: number;                // 🇻🇳 Tọa độ X trên layout
                            // 🇯🇵 レイアウト上のX座標

  y: number;                // 🇻🇳 Tọa độ Y trên layout
                            // 🇯🇵 レイアウト上のY座標

  status: number;           // 🇻🇳 Trạng thái máy: 0 (dừng), 1 (chạy), 2 (lỗi)
                            // 🇯🇵 機械の状態: 0（停止）、1（稼働）、2（異常）

  ct: number | null;        // 🇻🇳 Thời gian chu kỳ (cycle time) của máy
                            // 🇯🇵 機械のサイクルタイム（ct）

  machine_type: number;     // 🇻🇳 Loại máy (VD: 10 - máy OP1, 40 - máy cuối line)
                            // 🇯🇵 機械タイプ（例：10=OP1、40=ライン末端の機械）

  hour: number | null;      // 🇻🇳 Giờ liền trước của máy, dùng để truy vấn sản lượng
                            // 🇯🇵 前の時刻（生産量の取得に使用）

  counter: number | null;   // 🇻🇳 Số lượng sản phẩm đã sản xuất (tính đến giờ đó)
                            // 🇯🇵 生産された製品数（その時点まで）

  performance: number | null; // 🇻🇳 Hiệu suất máy (tính theo thời gian thực)
                              // 🇯🇵 機械のパフォーマンス（リアルタイムで算出）
}
