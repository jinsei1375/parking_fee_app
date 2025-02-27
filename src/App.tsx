import { useState } from 'react';

export default function ParkingFeeCalculator() {
  const [entryTime, setEntryTime] = useState('');
  const [exitTime, setExitTime] = useState('');
  const [dayStart, setDayStart] = useState('08:00');
  const [dayEnd, setDayEnd] = useState('22:00');
  const [nightStart, setNightStart] = useState('08:00');
  const [nightEnd, setNightEnd] = useState('22:00');
  const [dayRate, setDayRate] = useState(100);
  const [dayInterval, setDayInterval] = useState(20);
  const [dayMax, setDayMax] = useState(1000);
  const [nightRate, setNightRate] = useState(50);
  const [nightInterval, setNightInterval] = useState(20);
  const [nightMax, setNightMax] = useState(500);
  const [fee, setFee] = useState(null);

  const calculateFee = () => {
    // 料金計算ロジックを追加予定
    setFee(null); // 仮の値
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-100 p-8 overflow-auto">
      <div className="bg-blue-400 p-6 rounded-2xl shadow-lg w-96 m-4">
        <h1 className="text-xl font-bold mb-4 text-center">パーキング料金計算</h1>
        <div className="space-y-4">
          <div>
            <label className="block font-medium">入庫日時:</label>
            <input
              type="datetime-local"
              value={entryTime}
              onChange={(e) => setEntryTime(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">出庫日時:</label>
            <input
              type="datetime-local"
              value={exitTime}
              onChange={(e) => setExitTime(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">昼間の時間範囲:</label>
            <div className="flex space-x-2">
              <input
                type="time"
                value={dayStart}
                onChange={(e) => setDayStart(e.target.value)}
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="time"
                value={dayEnd}
                onChange={(e) => setDayEnd(e.target.value)}
                className="w-1/2 p-2 border rounded"
              />
            </div>
          </div>
          <div>
            <label className="block font-medium">昼間料金 (円/分):</label>
            <div className="flex space-x-4">
              <div className="flex-1 flex items-center">
                <input
                  type="number"
                  value={dayRate}
                  onChange={(e) => setDayRate(Number(e.target.value))}
                  className="w-full p-2 border rounded"
                />
                <span className="ml-2">円</span>
              </div>
              <div className="flex-1 flex items-center">
                <input
                  type="number"
                  value={dayInterval}
                  onChange={(e) => setDayInterval(Number(e.target.value))}
                  className="w-full p-2 border rounded"
                />
                <span className="ml-2">分</span>
              </div>
            </div>
          </div>
          <div>
            <label className="block font-medium">昼間最大料金 (円):</label>
            <div className="flex-1 flex items-center">
              <input
                type="number"
                value={dayMax}
                onChange={(e) => setDayMax(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
              <span className="ml-2">円</span>
            </div>
          </div>
          <div>
            <label className="block font-medium">夜間の時間範囲:</label>
            <div className="flex space-x-2">
              <input
                type="time"
                value={nightStart}
                onChange={(e) => setNightStart(e.target.value)}
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="time"
                value={nightEnd}
                onChange={(e) => setNightEnd(e.target.value)}
                className="w-1/2 p-2 border rounded"
              />
            </div>
          </div>
          <div>
            <label className="block font-medium">夜間料金 (円/分):</label>
            <div className="flex space-x-4">
              <div className="flex-1 flex items-center">
                <input
                  type="number"
                  value={nightRate}
                  onChange={(e) => setNightRate(Number(e.target.value))}
                  className="w-full p-2 border rounded"
                />
                <span className="ml-2">円</span>
              </div>
              <div className="flex-1 flex items-center">
                <input
                  type="number"
                  value={nightInterval}
                  onChange={(e) => setNightInterval(Number(e.target.value))}
                  className="w-full p-2 border rounded"
                />
                <span className="ml-2">分</span>
              </div>
            </div>
          </div>
          <div>
            <label className="block font-medium">夜間最大料金 (円):</label>
            <div className="flex-1 flex items-center">
              <input
                type="number"
                value={nightMax}
                onChange={(e) => setNightMax(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
              <span className="ml-2">円</span>
            </div>
          </div>
          <button
            onClick={calculateFee}
            className="w-full bg-yellow-500 text-white p-2 rounded mt-4"
          >
            計算
          </button>
          {fee !== null && <p className="text-center font-bold mt-2">合計料金: {fee} 円</p>}
        </div>
      </div>
    </div>
  );
}
