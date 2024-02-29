class form{
    constructor(name, dept, level, adress, phone, dof){
        this.name = name;
        this.dept = dept;
        this.level = level;
        this.adress = adress;
        this.phone = phone;
        this.dofB = this.dofB;
    }
}

//event listener for membership
document.getElementById('membershipForm').addEventListener('submit', function(e){
    const records = new Records();
    const name = document.getElementById('name').value;
        dept = document.getElementById('dept').value;
        level = document.getElementById('level').value;
        adress = document.getElementById('adress').value;
        phone = document.getElementById('phone').value;
        dofB = document.getElementById('dofB').value;
        if(name === '' || dept === '' || level === "" || adress === '' || phone === '' || dofB === ''){
            records.showAlert('Please Make Sure All Aields Are Ailled Correctly as Instructed Above', 'error');
            return;
        } else{
            records.showAlert('Your Record has been Added Succefully', 'success')
        }
    const membershipForm = new form(name, dept, level, adress, phone, dofB)
    new Records().addedRecords(membershipForm.name, membershipForm.dept, membershipForm.level, membershipForm.adress, membershipForm.level, membershipForm.phone, membershipForm.adress, membershipForm.dofB);
    records.clearAll();
    e.preventDefault();
})
//new UI after submission
class Records{
    addedRecords(form){
        const list = document.getElementById('table');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${membershipForm.name.value}</td>
        <td>${membershipForm.dept.value}</td>
        <td>${membershipForm.level.value}</td>
        <td>${membershipForm.adress.value}</td>
        <td>${membershipForm.phone.value}</td>
        <td>${membershipForm.dofB.value}</td>
        <td><a href="#" id="delete">X</a></td>
        `;
        document.querySelector('thead').appendChild(row);
        document.getElementById('delete').addEventListener('click', function(e) {
            const records = new Records()
            records.deleteMember(e.target); 
          });
    }
    showAlert(message, className, status){
        const div = document.createElement('div');
        div.className = `come ${className} ${status}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#membershipForm');
        document.getElementById('request');
        container.insertBefore(div, request);
        setTimeout(function(){
            const alertElement = document.querySelector('.come');
            alertElement.remove();
        }, 3000 )
    }
    clearAll(){
        document.getElementById('name').value = '';
        document.getElementById('dept').value = '';
        document.getElementById('level').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('adress').value = '';
        document.getElementById('dofB').value = '';
    }
    deleteMember(target){
        const records = new Records();
        target.parentElement.parentElement.remove();
            records.showAlert('Member deleted Successfully', 'success');
    }
}