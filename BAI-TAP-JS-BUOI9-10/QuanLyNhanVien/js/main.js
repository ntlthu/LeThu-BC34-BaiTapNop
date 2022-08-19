const rank = {
    giamdoc: "Giám đốc",
    truongphong: "Trưởng phòng",
    nhanvien: "Nhân viên"
}

const listEmployees = []

function getFormValue() {
    const tknv = document.getElementById("tknv").value
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const date = document.getElementById("datepicker").value
    const luongCB = document.getElementById("luongCB").value
    const chucvu = document.getElementById("chucvu").value
    const giolam = document.getElementById("gioLam").value

    return {
        tknv,
        name,email,password,date,luongCB: Number(luongCB),chucvu, giolam: Number(giolam)
    }
}


document.getElementById("btnThemNV").onclick = () => {

}

function NewEmployee(username, name, email, password, startDay, baseSalary, jobTitle, workingHour) {



    listEmployees.concat({
        
    })
}


function isUsernameValid(username) {
    for (let c of username) {
        if (c < '0' || c > '9') {
            return false
        }
    }
    return trimmedUsername.length >= 4 && trimmedUsername.length <= 6
}

function isNameValid(name) {
    lowercase = name.toLowerCase()
    for (let c of lowercase) {
        if (!((c >= 'a' && c <= 'z') || c == ' ')) {
            return false;
        }
    }
    return lowercase.length > 0
}

function isEmailValid(email) {
   return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
}

function isPasswordValid(password) {
    if (password.length < 6 || password.length > 10) return false

    const cond = [false, false, false]

    for (let c of password) {
        if (c >= '0' && c <= '9') {
            cond[0] = true
        }
        else if (c >= 'A' && c <= 'Z') {
            cond[1] = true
        }
        else if (c < 'a' && c > 'z') {
            cond[2] = true
        }
    }

    return !cond.some(pass => !pass)
}

let daySelected = null

function isDateValid(date) {
    return date != null
}

function isBaseSalaryValid(salary) {
    return salary >= 1e6 && salary <= 2e7
}

function isJobTitleValid(jobTitle) {
    return jobTitle == "Giám đốc" || jobTitle == "Trưởng phòng" || jobTitle == "Nhân viên"
}

function isWorkingHourValid(hour) {
    return hour >= 80 && hour <= 200
}


function calcTotalSalary(salary, jobTitle) {
    if (jobTitle == "Giám đốc") {
        return salary * 3
    }
    else if (jobTitle == "Trưởng phòng") {
        return salary * 2
    }
    return salary * 1
}


function calcRank(workingHour) {
    if (workingHour >= 192) return "Xuất sắc"
    if (workingHour >= 176) return "Giỏi"
    if (workingHour >= 160) return "Khá"
    return "Trung bình"
}

