import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")
            let matchingEmployee = null
            let saleCount = 0

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId))
                    matchingEmployee = employee
            }

            for (const order of orders) {
                if (order.employeeId === matchingEmployee.id) {
                    saleCount++
                }
            }

            if (saleCount === 1) {
                window.alert(`${matchingEmployee.name} has sold ${saleCount} product`)
            } else {
                window.alert(`${matchingEmployee.name} has sold ${saleCount} products`)
            }
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

