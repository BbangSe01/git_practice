const student = {
    id: 60201940,
    name: '방세현',
    grades: [64, 80, 77, 97, 90],
    displayInfo() {
        console.log(`학번: ${this.id}`)
        console.log(`이름: ${this.name}`)
        console.log(`성적: ${this.grades}`)
    },
    getHighest(grades) {
        max = grades[0]

        for (let i = 1; i < grades.length; i++) {
            if (max < grades[i]) {
                max = grades[i]
            }
        }
        console.log(`최고 성적: ${max}`)
    }
}

student.displayInfo()
student.getHighest(student.grades)