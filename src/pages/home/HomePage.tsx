import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // Dữ liệu giả
  const user = {
    print_job: 5,
    page: 120,
  };

  const recentPrintJobs = [
    {
      filename: "BaiTap1.doc",
      filetype: "doc",
      page: 10,
      time: "2024-11-26 10:00",
    },
    {
      filename: "Report2024.pdf",
      filetype: "pdf",
      page: 20,
      time: "2024-11-25 15:30",
    },
    {
      filename: "DoanhThu.xlsx",
      filetype: "xlsx",
      page: 15,
      time: "2024-11-24 12:00",
    },
  ];

  // Xử lý icon theo loại file
  const getFileIcon = (filetype: string) => {
    switch (filetype) {
      case "doc":
      case "docx":
        return "pi pi-file-word";
      case "pdf":
        return "pi pi-file-pdf";
      case "xlsx":
      case "xls":
        return "pi pi-file-excel";
      default:
        return "pi pi-file";
    }
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Trang chủ</h1>
        <div className="space-x-2">
          <button
            onClick={() => navigate("/buy-pages")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Thêm giấy in
          </button>
          <button
            onClick={() => navigate("/create-print-job")}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Tạo lệnh in
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Card 1: Số lệnh in */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-medium">Số lệnh in</h2>
          <p className="text-3xl font-bold text-blue-500 mt-2">
            {user.print_job}
          </p>
        </div>

        {/* Card 2: Số trang còn lại */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-medium">Số trang còn lại</h2>
          <p className="text-3xl font-bold text-green-500 mt-2">{user.page}</p>
        </div>
      </div>

      {/* Lịch sử in */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Lịch sử in</h2>
          <button
            onClick={() => navigate("/print-history")}
            className="text-blue-500 hover:underline"
          >
            Xem tất cả
          </button>
        </div>
        <div className="space-y-3">
          {recentPrintJobs.map((job, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-md"
            >
              <div className="flex items-center space-x-3">
                <i
                  className={`${getFileIcon(
                    job.filetype
                  )} text-xl text-blue-500`}
                ></i>
                <div>
                  <p className="font-medium">{job.filename}</p>
                  <p className="text-sm text-gray-500">{job.time}</p>
                </div>
              </div>
              <div className="text-sm text-gray-700">{job.page} trang</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
