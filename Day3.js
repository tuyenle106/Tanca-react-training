// Viết Promise giả lập tải dữ liệu sau 2 giây.  
const delay2s = () => new Promise(resolve => setTimeout(() => resolve("Tải sau 2 giây"), 2000));

async function download() {
    const result = await delay2s();
    console.log(result);
}

// Chuyển Promise trên sang async/await.  
async function downloadWithAwait() {
    try {
        const result = await delay2s();
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Tạo todo list đơn giản: nhập task vào input, hiển thị danh sách trên trang.  
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const task = taskInput.value.trim();
    if (task) {
        const listItem = document.createElement("li");
        listItem.innerText = task;
        taskList.appendChild(listItem);
        taskInput.value = ""; // Xóa input sau khi thêm
    } else {
        alert("Vui lòng nhập task!");   
    }
}

