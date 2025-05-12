function FeatureToggle(featureName, isEnabled, userGroupAcces) {
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAcces = userGroupAcces
    this.toggleFeature = function () {
        return this.isEnabled
    }
}
FeatureToggle.prototype.canAccess = function (userRole) {
    return this.isEnabled && this.userGroupAcces.includes(userRole)
}
const feature = new FeatureToggle("signup", true, ["betaTesters", "admins"])
console.log(feature.toggleFeature())
const feature2 = new FeatureToggle("Log", true, ["QA", "admins"])
userRole = "QA"
if (feature.canAccess(userRole) == "user") {
    console.log("access accepted denied")
}
else {
    switch (userRole) {
        case 'admins':
        case 'betaTesters':
            console.log("access accepted")
            break;
        default:
            console.log("access denied")

    }
}



function Timelog(freeLancerName, projectDetails, logs) {
    this.freeLancerName = freeLancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;
}


Timelog.prototype.calculateTotalEarnings = function () {
    return this.logs.reduce((sum, log) => sum+ log.hoursWorked * this.projectDetails.hourlyRate, 0)
}


Timelog.prototype.filterLogsByDate = function (startDate, endDate) {
    return this.logs.filter(log => log.date <= endDate && log.date >= startDate)


}

Timelog.prototype.weeklyHours = function () {
    let totalHours = this.logs.reduce((sum, log) => sum + log.hoursWorked, 0)
    if (totalHours >= 40) {
        console.log(`Total hours worked are  ${this.logs.hoursWorked}`)
    }
    else {
        console.log("Hours  less than 40.")
    }
}


let irine = new Timelog("irine", { name: "login feature", hourlyRate: 1000 }, [
    { date: "Jan-15-2025", hoursWorked: 5 },
    { date: "Feb-19-2025", hoursWorked: 7 },
    { date: "March-17-2025", hoursWorked: 8 },

])


console.log(irine.calculateTotalEarnings())
console.log(irine)
console.log(irine.weeklyHours())
console.log(irine.filterLogsByDate("01-15-2025", "02-19-2025"))



function Order(customer, items, status) {
    this.customer = customer
    this.items = items
    this.status = status
}


Order.prototype.computeTotalCost = function () {
    return this.items.reduce((sum, cost) => sum + cost.quantity * cost.unitPrice, 0)
}

Order.prototype.updateOrderStatus = function () {
    if (this.status.includes("successful")) {
        console.log("Your payment is successful.")
    }
    else { "Your payment is being processed." }


}
Order.prototype.categorizeOrederUrgency = function () {

}

let order = new Order({ name: "Tony", email: "tony@gmail.com" }, [
    { productName: "ipads", quantity: 2, unitPrice: 30000 },
    { productName: "phones", quantity: 1, unitPrice: 80000 },
    { productName: "airpods", quantity: 1, unitPrice: 3000 },
    { productName: "headphones", quantity: 5, unitPrice: 5000 }
], "Your payment is successful")


console.log(order);
console.log(order.computeTotalCost());
console.log(order.updateOrderStatus());


class Employee {
    constructor(id, name, perfomanceMetrics, feedback) {
        this.id = id
        this.name = name
        this.perfomanceMetrics = perfomanceMetrics
        this.feedback = feedback
    }
}




Employee.prototype.averageScore = function () {
    let average = Object.values(this.perfomanceMetrics)
    return average.reduce((sum, scores) => sum + scores, 0) / average.length
}


Employee.prototype.perfomanceClassification = function () {
    let average = this.averageScore()
    if (average >= 20) {
        console.log("level one")
    }
    else if (average >= 10 && average < 20) {
        console.log("level 2")
    }
    else {
        console.log("level 3")

    }
}


Employee.prototype.newFeedback = function () {
    let average = this.averageScore()
    if (average >= 15) {
       return this.feedback ["Good performance", "good efficiency.", "You are reliable "]
    }
    else if (average >= 7 && average < 15) {
        this.feedback = ["Good perfomance put work on your communication", "Improve on your effieciency.", "improve on your reliability."]
    }
    else { this.feedback = ["Work on your communication", "Work  on your efficiency", "work on your reliability."] }
    return this.feedback
}

let employee = new Employee(20, "Cathy", { communications: 15, efficiency: 16, reliability: 10 })
console.log(employee);
console.log(employee.averageScore())
console.log(employee.perfomanceClassification());
console.log(employee.newFeedback());


class Course {
    constructor(title, instructor, students) {
        this.title = title
        this.instructor = instructor
        this.students = students
    }
}
Course.prototype.namesThatCompletedCourse = function () {
    return this.students.filter(student => student.completionStatus === true)
}
Course.prototype.enrolledStudents = function (expertise) {
    return this.students.filter(student => this.instructor.expertise === expertise.length)
}
Course.prototype.message = function () {
    if (this.students.length > 5) {
        return `${this.instructor.name}:You have more than 5 students.`
    }
    else {
        return `${this.instructor.name}:You have less than 5 students.`
    }
}


let course = new Course("DAS", { name: "linn", expertise: "algorithm" }, [
    { name: "hockey", completionStatus: true },
    { name: "molly", completionStatus: false },
    { name: "Beril", completionStatus: false },
    { name: "Tash", completionStatus: true }
])


console.log(course);
console.log(course.enrolledStudents("frontend"));
console.log(course.namesThatCompletedCourse());
console.log(course.message());

