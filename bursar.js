
let drop_down_menue = document.querySelectorAll('#drop_down_menue');

//BTNS
let DashboardBtn = document.querySelector('#Dashboard')
let StudentsBtn = document.querySelector('#Students')
let FeesBtn = document.querySelector('#Fees')
let TeachersBtn = document.querySelector('#Teachers')
let AttendanceBtn = document.querySelector('#Attendance')
let GradesBtn = document.querySelector('#Grades')
let CommunicationBtn = document.querySelector('#Communication')
let MarksBtn = document.querySelector('#Marks')
let ReportsBtn = document.querySelector('#Reports')
let SettingsBtn = document.querySelector('#Settings')

let dashboard_icon = document.querySelector('.dashboard_icon');
let student_icon = document.querySelector('.student_icon');
let teacher_icon = document.querySelector('.teacher_icon');
let attendence_icon = document.querySelector('.attendence_icon');
let fees_icon = document.querySelector('.fees_icon');
let marks_icon = document.querySelector('.marks_icon');
let grades_icon = document.querySelector('.grades_icon');
let communication_icon = document.querySelector('.communication_icon');
let reports_icon = document.querySelector('.reports_icon');
let settings_icon = document.querySelector('.settings_icon');

/*------------------------------| STUDENTS ELEMENTS |------------------------------*/
//Input Fields
let addStdPhotoSelected = document.getElementById('addStdPhotoSelected'); 
let addSelectStdPhoto = document.getElementById('addSelectStdPhoto'); 
let addStdGeneratedStdId = document.getElementById('addStdGeneratedStdId'); 
let addStdFname = document.getElementById('addStdFname'); 
let addStdMname = document.getElementById('addStdMname'); 
let addStdLname = document.getElementById('addStdLname'); 
let addStdDob = document.getElementById('addStdDob'); 
let addStdSelectedGender = document.getElementById('addStdSelectedGender'); 
let addStdSelectedClass = document.getElementById('addStdSelectedClass'); 
let addStdSelectedAdmissionClass = document.getElementById('addStdSelectedAdmissionClass'); 
let addSelectedEntryDate = document.getElementById('addSelectedEntryDate'); 
let addSelectedEntryTerm = document.getElementById('addSelectedEntryTerm'); 
let addIsBusary = document.getElementById('addIsBusary'); 
let addStdNationality = document.getElementById('addStdNationality'); 
let addStdDistrict = document.getElementById('addStdDistrict'); 
let addStdSCounty = document.getElementById('addStdSCounty');
let addStdFormerSch = document.getElementById('addStdFormerSch');

let addStdPFname = document.getElementById('addStdPFname'); 
let addStdPLname = document.getElementById('addStdPLname'); 
let addStdSelectedRelative = document.getElementById('addStdSelectedPRelative'); 
let addStdPRelativeContact = document.getElementById('addStdPRelativeContact'); 
let addStdPRelativeEmail = document.getElementById('addStdPRelativeEmail');

let addStdHCondition = document.getElementById('addStdHCondition'); 
let addStdHDrName = document.getElementById('addStdHDrName'); 
let addStdHDrContact = document.getElementById('addStdHDrContact'); 

let addStdSPhyCheck = document.getElementById('addStdSPhyCheck'); 
let addStdSChemCheck = document.getElementById('addStdSChemCheck'); 
let addStdSMathsCheck = document.getElementById('addStdSMathsCheck'); 
let addStdSBioCheck = document.getElementById('addStdSBioCheck'); 
let addStdSGeogCheck = document.getElementById('addStdSGeogCheck'); 
let addStdSHisCheck = document.getElementById('addStdSHisCheck'); 
let addStdSEngCheck = document.getElementById('addStdSEngCheck'); 

let addStdSIctCheck = document.getElementById('addStdSIctCheck'); 
let addStdSEntCheck = document.getElementById('addStdSEntCheck'); 
let addStdSAgricCheck = document.getElementById('addStdSAgricCheck'); 
let addStdSArtCheck = document.getElementById('addStdSArtCheck'); 
let addStdSTdCheck = document.getElementById('addStdSTdCheck'); 
let addStdSPeCheck = document.getElementById('addStdSPeCheck'); 
let addStdSLugCheck = document.getElementById('addStdSLugCheck'); 
let addStdSKisCheck = document.getElementById('addStdSKisCheck'); 
let addStdSCreCheck = document.getElementById('addStdSCreCheck'); 
let addStdSIreCheck = document.getElementById('addStdSIreCheck');

let addStdCSbjctCheck = document.querySelectorAll('.addStdCSbjctCheck'); 
let addStdOSbjctCheck = document.querySelectorAll('.addStdOSbjctCheck'); 

//Marks Inputs
let adminStdMarksPhy1 = document.getElementById('adminStdMarksPhy1');
let adminStdMarksPhy2 = document.getElementById('adminStdMarksPhy2');
let adminStdMarksChem1 = document.getElementById('adminStdMarksChem1');
let adminStdMarksChem2 = document.getElementById('adminStdMarksChem2');
let adminStdMarksMaths1 = document.getElementById('adminStdMarksMaths1');
let adminStdMarksMaths2 = document.getElementById('adminStdMarksMaths2');
let adminStdMarksBio1 = document.getElementById('adminStdMarksBio1');
let adminStdMarksBio2 = document.getElementById('adminStdMarksBio2');
let adminStdMarksGeog1 = document.getElementById('adminStdMarksGeog1');
let adminStdMarksGeog2 = document.getElementById('adminStdMarksGeog2');
let adminStdMarksHis1 = document.getElementById('adminStdMarksHis1');
let adminStdMarksHis2 = document.getElementById('adminStdMarksHis2');
let adminStdMarksEng1 = document.getElementById('adminStdMarksEng1');
let adminStdMarksEng2 = document.getElementById('adminStdMarksEng2');

let adminStdMarksIct1 = document.getElementById('adminStdMarksIct1');
let adminStdMarksIct2 = document.getElementById('adminStdMarksIct2');
let adminStdMarksAgric1 = document.getElementById('adminStdMarksAgric1');
let adminStdMarksAgric2 = document.getElementById('adminStdMarksAgric2');
let adminStdMarksEnt1 = document.getElementById('adminStdMarksEnt1');
let adminStdMarksEnt2 = document.getElementById('adminStdMarksEnt2');
let adminStdMarksArt1 = document.getElementById('adminStdMarksArt1');
let adminStdMarksArt2 = document.getElementById('adminStdMarksArt2');
let adminStdMarksTd1 = document.getElementById('adminStdMarksTd1');
let adminStdMarksTd2 = document.getElementById('adminStdMarksTd2');
let adminStdMarksLit1 = document.getElementById('adminStdMarksLit1');
let adminStdMarksLit2 = document.getElementById('adminStdMarksLit2');
let adminStdMarksPe1 = document.getElementById('adminStdMarksPe1');
let adminStdMarksPe2 = document.getElementById('adminStdMarksPe2');
let adminStdMarksCre1 = document.getElementById('adminStdMarksCre1');
let adminStdMarksCre2 = document.getElementById('adminStdMarksCre2');
let adminStdMarksIre1 = document.getElementById('adminStdMarksIre1');
let adminStdMarksIre2 = document.getElementById('adminStdMarksIre2');
let adminStdMarksLug1 = document.getElementById('adminStdMarksLug1');
let adminStdMarksLug2 = document.getElementById('adminStdMarksLug2');
let adminStdMarksKis1 = document.getElementById('adminStdMarksKis1');
let adminStdMarksKis2 = document.getElementById('adminStdMarksKis2');

let addStdGeneratedStdMarksId = document.getElementById('addStdGeneratedStdMarksId');
let addStdMarksFname = document.getElementById('addStdMarksFname');
let addStdMarksMname = document.getElementById('addStdMarksMname');
let addStdMarksLname = document.getElementById('addStdMarksLname');
let addStdMarksSelectedGender = document.getElementById('addStdMarksSelectedGender');
let addStdMarksSelectedClass = document.getElementById('addStdMarksSelectedClass');
let addSelectStdMarksPhoto = document.getElementById('addSelectStdMarksPhoto');

let createAdminDatabaseYear = document.getElementById('createAdminDatabaseYear');
let copyAdminStdsDetsFrom = document.getElementById('copyAdminStdsDetsFrom');
let copyAdminStdsDetsFromForFees = document.getElementById('copyAdminStdsDetsFromForFees');

//settings Card
let adminStdTableBdy = document.getElementById('adminStdTableBdy');
let adminStdFeesTableBdy = document.getElementById('adminStdFeesTableBdy');
let adminStdMarksTbdy = document.getElementById('adminStdMarksTbdy');
let adminDetstbdy = document.getElementById('adminDetstbdy');
let teachersDetstbdy = document.getElementById('teachersDetstbdy');
let marksDetstbdy = document.getElementById('marksDetstbdy');
let generateMarksDbTerm = document.getElementById('generateMarksDbTerm');
let generateMarksDbExam = document.getElementById('generateMarksDbExam');
let selectAvalableAdminDetsDbs = document.getElementById('selectAvalableAdminDetsDbs');

//Pop Ups
const pops = document.querySelectorAll('.pops');
const pop_ups_box = document.querySelector('.pop_ups_box');
const pop_up_card_1 = document.querySelector('.pop_up_card_1');
const pop_up_card_2 = document.querySelector('.pop_up_card_2');
const pop_up_card_3 = document.querySelector('.pop_up_card_3');
const pop_up_card_4 = document.querySelector('.pop_up_card_4');
const pop_up_card_6 = document.querySelector('.pop_up_card_6');
//Navigations
let stdNavSelectYear = document.getElementById('stdNavSelectYear');
let stdNavselectstdMarksYear = document.getElementById('stdNavselectstdMarksYear');
let stdNavselectstdMarksTerm = document.getElementById('stdNavselectstdMarksTerm');
let stdNavselectstdMarksExam = document.getElementById('stdNavselectstdMarksExam');

let stdNavGradesSelectYear = document.getElementById('stdNavGradesSelectYear');
let stdNavGradesSelectTerm = document.getElementById('stdNavGradesSelectTerm');
let stdNavGradesSelectExam = document.getElementById('stdNavGradesSelectExam');

let stdNavselectstdFeesYear = document.getElementById('stdNavselectstdFeesYear');
let stdNavselectstdFeesTerm = document.getElementById('stdNavselectstdFeesTerm');
let stdselectstdFeesDBDetsDTerm = document.getElementById('stdselectstdFeesDBDetsDTerm');

let teachersNavSelectYearDBDets = document.getElementById('teachersNavSelectYearDBDets');

let body_frame_2_adminStdMarks = document.querySelector('#body_frame_2_adminStdMarks');
// let body_frame_3 = document.querySelector('.body_frame_3');

//-----COMMUNICATION Inputs
let eventExpense_input = document.getElementById('eventExpense_input');
let eventCDate_input = document.getElementById('eventCDate_input');
let eventCTerm_input = document.getElementById('eventCTerm_input');
let eventDoDate_input = document.getElementById('eventDoDate_input');
let eventTitle_input = document.getElementById('eventTitle_input');
let eventDesc_input = document.getElementById('eventDesc_input');

let selectEventYear = document.getElementById('selectEventYear');
let selectEventTerm = document.getElementById('selectEventTerm');

let eventBars = document.getElementById('eventBars');


DashboardBtn.addEventListener('mouseover', () => {
    dashboard_icon.src = 'assets/icons/dashboard_dark.png'
})
DashboardBtn.addEventListener('mouseleave', () => {
    dashboard_icon.src = 'assets/icons/dashboard_light.png'
})
StudentsBtn.addEventListener('mouseover', () => {
    student_icon.src = 'assets/icons/student_dark.png'
})
StudentsBtn.addEventListener('mouseleave', () => {
    student_icon.src = 'assets/icons/student_light.png'
})
FeesBtn.addEventListener('mouseover', () => {
    fees_icon.src = 'assets/icons/fees_dark.png'
})
FeesBtn.addEventListener('mouseleave', () => {
    fees_icon.src = 'assets/icons/fees_light.png'
})
TeachersBtn.addEventListener('mouseover', () => {
    teacher_icon.src = 'assets/icons/teacher_dark.png'
})
TeachersBtn.addEventListener('mouseleave', () => {
    teacher_icon.src = 'assets/icons/teacher_light.png'
})
AttendanceBtn.addEventListener('mouseover', () => {
    attendence_icon.src = 'assets/icons/attend_dark.png'
})
AttendanceBtn.addEventListener('mouseleave', () => {
    attendence_icon.src = 'assets/icons/attend_light.png'
})
MarksBtn.addEventListener('mouseover', () => {
    marks_icon.src = 'assets/icons/marks_dark.png'
})
MarksBtn.addEventListener('mouseleave', () => {
    marks_icon.src = 'assets/icons/marks_light.png'
})
GradesBtn.addEventListener('mouseover', () => {
    grades_icon.src = 'assets/icons/grades_dark.png'
})
GradesBtn.addEventListener('mouseleave', () => {
    grades_icon.src = 'assets/icons/grades_light.png'
})
CommunicationBtn.addEventListener('mouseover', () => {
    communication_icon.src = 'assets/icons/communication_dark.png'
})
CommunicationBtn.addEventListener('mouseleave', () => {
    communication_icon.src = 'assets/icons/communication_light.png'
})
ReportsBtn.addEventListener('mouseover', () => {
    reports_icon.src = 'assets/icons/reports_dark.png'
})
ReportsBtn.addEventListener('mouseleave', () => {
    reports_icon.src = 'assets/icons/reports_light.png'
})
SettingsBtn.addEventListener('mouseover', () => {
    settings_icon.src = 'assets/icons/setting_dark.png'
})
SettingsBtn.addEventListener('mouseleave', () => {
    settings_icon.src = 'assets/icons/setting_light.png'
})

StudentsBtn.addEventListener('click', () => {
    drop_down_menue[0].classList.toggle('dropDown');
})
FeesBtn.addEventListener('click', () => {
    drop_down_menue[2].classList.toggle('dropDown');
})
TeachersBtn.addEventListener('click', () => {
    drop_down_menue[1].classList.toggle('dropDown');
})
AttendanceBtn.addEventListener('click', () => {
    drop_down_menue[3].classList.toggle('dropDown');
})
MarksBtn.addEventListener('click', () => {
    drop_down_menue[4].classList.toggle('dropDown');
})
GradesBtn.addEventListener('click', () => {
    drop_down_menue[5].classList.toggle('dropDown');
})
CommunicationBtn.addEventListener('click', () => {
    drop_down_menue[6].classList.toggle('dropDown');
})
ReportsBtn.addEventListener('click', () => {
    drop_down_menue[7].classList.toggle('dropDown');
})
SettingsBtn.addEventListener('click', () => {
    drop_down_menue[8].classList.toggle('dropDown');
})

//--------------------| Cards
let dashboard_card = document.querySelector('.dashboard_card');
let teachers_card = document.querySelector('.teachers_card');
let students_card = document.querySelector('.students_card');
let fees_card = document.querySelector('.fees_card');
let marks_card = document.querySelector('.marks_card');
let grades_card = document.querySelector('.grades_card');
let settings_card = document.querySelector('.settings_card');
let communication_card = document.querySelector('.communication_card');
let all_cards = document.querySelectorAll('#layout_card')

let cardDisplayed;

/*------------------------------| STUDENTS FUNCTIONS |------------------------------*/
//----------------| Students' Managemant
let stdManagementClassIdentifier = document.getElementById('classIdentifier');
let stdManagementYearIdentifier = document.getElementById('stdManagementYearIdentifier');
let feesClassIdentifier = document.getElementById('feesClassIdentifier');
let feesYearIdentifier = document.getElementById('feesYearIdentifier');
let feesTermIdentifier = document.getElementById('feesTermIdentifier');
let stdMarksClassIdentifier = document.getElementById('stdMarksClassIdentifier');
let stdGradesClassIdentifier = document.getElementById('stdGradesClassIdentifier');

let loader = document.querySelector(".loader");

function s1StudentsManageBtn() {
    adminStdClass = 'form_1';
    cardDisplayed = `manageStd_card`;
    stdManagementClassIdentifier.innerText = 'Senior 1';
    readAdminSTdsFunc();
    RenderCards();
}
function s2StudentsManageBtn() {
    adminStdClass = 'form_2';
    cardDisplayed = `manageStd_card`
    stdManagementClassIdentifier.innerText = 'Senior 2';
    readAdminSTdsFunc();
    RenderCards() 
}
function s3StudentsManageBtn() {
    adminStdClass = 'form_3';
    cardDisplayed = `manageStd_card`
    stdManagementClassIdentifier.innerText = 'Senior 3'
    readAdminSTdsFunc();
    RenderCards() 
}
function s4StudentsManageBtn() {
    adminStdClass = 'form_4';
    cardDisplayed = `manageStd_card`
    stdManagementClassIdentifier.innerText = 'Senior 4';
    readAdminSTdsFunc();
    RenderCards() 
}
function s5StudentsManageBtn() {
    adminStdClass = 'form_5';
    cardDisplayed = `manageStd_card`
    stdManagementClassIdentifier.innerText = 'Senior 5';
    readAdminSTdsFunc();
    RenderCards() 
}
function s6StudentsManageBtn() {
    adminStdClass = 'form_6';
    cardDisplayed = `manageStd_card`
    stdManagementClassIdentifier.innerText = 'Senior 6';
    readAdminSTdsFunc();
    RenderCards() 
}

function s1StudentsFeesManageBtn() {
    feesClass = 'form_1';
    cardDisplayed = `manageStdFees_card`
    feesClassIdentifier.innerText = 'Senior 1'
    getFee();
    RenderCards() 
}
function s2StudentsFeesManageBtn() {
    feesClass = 'form_2';
    cardDisplayed = `manageStdFees_card`
    feesClassIdentifier.innerText = 'Senior 2';
    getFee();
    RenderCards() 
}
function s3StudentsFeesManageBtn() {
    feesClass = 'form_3';
    cardDisplayed = `manageStdFees_card`
    feesClassIdentifier.innerText = 'Senior 3'
    getFee();
    RenderCards() 
}
function s4StudentsFeesManageBtn() {
    feesClass = 'form_4';
    cardDisplayed = `manageStdFees_card`
    feesClassIdentifier.innerText = 'Senior 4';
    getFee();
    RenderCards() 
}
function s5StudentsFeesManageBtn() {
    feesClass = 'form_5';
    cardDisplayed = `manageStdFees_card`
    feesClassIdentifier.innerText = 'Senior 5';
    getFee();
    RenderCards() 
}
function s6StudentsFeesManageBtn() {
    feesClass = 'form_6';
    cardDisplayed = `manageStdFees_card`
    feesClassIdentifier.innerText = 'Senior 6';
    getFee();
    RenderCards() 
}

//----------------| Students' Grades
//??? Not Explained
let gradesYear = new Date().getFullYear();
let gradesClass = 'form_1';
let gradesTerm = 1;
let gradesExam = 'bot';
let gradesArr = [];
let gradesArr_2 = [];
let update_grades_id;
let saveGradesFlag = 1;

function s1GradesBtn() {
    cardDisplayed = 'students_grades_card';
    stdGradesClassIdentifier.innerText = 'Senior 1';
    gradesClass = 'form_1';
    readGradesFunc();
    RenderCards()
}
function s2GradesBtn() {
    cardDisplayed = 'students_grades_card';
    stdGradesClassIdentifier.innerText = 'Senior 2';
    gradesClass = 'form_2';
    readGradesFunc();
    RenderCards();
}
function s3GradesBtn() {
    cardDisplayed = 'students_grades_card';
    stdGradesClassIdentifier.innerText = 'Senior 3';
    gradesClass = 'form_3';
    readGradesFunc();
    RenderCards()
}
function s4GradesBtn() {
    cardDisplayed = 'students_grades_card';
    stdGradesClassIdentifier.innerText = 'Senior 4';
    gradesClass = 'form_4';
    readGradesFunc();
    RenderCards()
}
function s5GradesBtn() {
    cardDisplayed = 'students_grades_card';
    stdGradesClassIdentifier.innerText = 'Senior 5';
    gradesClass = 'form_5';
    readGradesFunc();
    RenderCards()
}
function s6GradesBtn() {
    cardDisplayed = 'students_grades_card';
    stdGradesClassIdentifier.innerText = 'Senior 6';
    gradesClass = 'form_6';
    readGradesFunc();
    RenderCards()
}


//----------------| Students' Marks
function s1MarksBtn() {
    cardDisplayed = 'students_marks_card';
    stdMarksClassIdentifier.innerText = 'Senior 1';
    adminStdMarksClass = 'form_1';
    readAdminStdsMarksFunc();
    RenderCards()
}
function s2MarksBtn() {
    cardDisplayed = 'students_marks_card';
    stdMarksClassIdentifier.innerText = 'Senior 2';
    adminStdMarksClass = 'form_2';
    // renderMarksDBs()
    readAdminStdsMarksFunc();
    RenderCards()
}
function s3MarksBtn() {
    cardDisplayed = 'students_marks_card';
    stdMarksClassIdentifier.innerText = 'Senior 3';
    adminStdMarksClass = 'form_3';
    readAdminStdsMarksFunc();
    RenderCards()
}
function s4MarksBtn() {
    cardDisplayed = 'students_marks_card';
    stdMarksClassIdentifier.innerText = 'Senior 4';
    adminStdMarksClass = 'form_4';
    // renderMarksDBs();
    readAdminStdsMarksFunc();
    RenderCards()
}
function s5MarksBtn() {
    cardDisplayed = 'students_marks_card';
    stdMarksClassIdentifier.innerText = 'Senior 5';
    adminStdMarksClass = 'form_5';
    // renderMarksDBs();
    readAdminStdsMarksFunc();
    RenderCards()
}
function s6MarksBtn() {
    cardDisplayed = 'students_marks_card';
    stdMarksClassIdentifier.innerText = 'Senior 6';
    adminStdMarksClass = 'form_6';
    // renderMarksDBs();
    readAdminStdsMarksFunc();
    RenderCards()
}

//----------------| Students' Reports
function dbSettingsBtn() {
    cardDisplayed = 'db_settings_card';
    stdMarksClassIdentifier.innerText = 'Settings';
    RenderCards()
}
function schEventsBtn() {
    cardDisplayed = 'communication_events_card';
    stdGradesClassIdentifier.innerText = 'Events';
    RenderCards();
    getAllEventsFunc();
}

//??? Not Explained
function s1ReportsBtn() {
    cardDisplayed = 'students_Reports_card';
    stdMarksClassIdentifier.innerText = 'Senior 1';
    console.log("Reports for Form I")
    RenderCards()
}
function s2ReportsBtn() {
    cardDisplayed = 'students_Reports_card';
    stdMarksClassIdentifier.innerText = 'Senior 2';
    RenderCards()
}
function s3ReportsBtn() {
    cardDisplayed = 'students_Reports_card';
    stdMarksClassIdentifier.innerText = 'Senior 3';
    RenderCards()
}
function s4ReportsBtn() {
    cardDisplayed = 'students_Reports_card';
    stdMarksClassIdentifier.innerText = 'Senior 4';
    RenderCards();
}
function s5ReportsBtn() {
    cardDisplayed = 'students_Reports_card';
    stdMarksClassIdentifier.innerText = 'Senior 5';
    RenderCards()
}
function s6ReportsBtn() {
    cardDisplayed = 'students_Reports_card';
    stdMarksClassIdentifier.innerText = 'Senior 6';
    RenderCards()
}


//Pop Ups Functionality
function addStudentBtn() {
    saveAdminFlag = 1;
    openAddStdPopFunc()
}
function closeStdPopUpBtn() {
    clrAddStdInputsBtn();
    clrCreateEventInputsBtn();
    clrAddStdMarksInputsBtn();
    pops.forEach(pop => {
        pop.style.display = 'none';
    })
    pop_ups_box.style.display = '';
}

function clrAddStdInputsBtn() {
    // addStdPhotoSelected.src = 'j.jpg';
    addStdSelectedPhotoSrc = 'assets/icons/user_dark.png'
    addSelectStdPhoto.src = addStdSelectedPhotoSrc;
    addStdGeneratedStdId.innerText = 'ST##000';
    addStdFname.value = '';
    addStdMname.value = '';
    addStdLname.value = '';
    addStdDob.value = '';
    addStdSelectedGender.value = '';
    addStdSelectedClass.value = '';
    addStdSelectedAdmissionClass.value = '';
    addSelectedEntryDate.value = '';
    addIsBusary.value = 'false';
    addStdNationality.value = '';
    addStdDistrict.value = '';
    addStdSCounty.value = '';

    addStdPFname.value = '';
    // addStdPLname.value = '';
    addStdSelectedRelative.value = '';
    addStdPRelativeContact.value = '';
    addStdPRelativeEmail.value = '';
    addStdHCondition.value = '';

    addStdHDrName.value = '';
    addStdHDrContact.value = '';
    addStdHDrName.value = '';

    addStdSIctCheck.value = false;
    addStdSEntCheck.checked = false;
    addStdSAgricCheck.checked = false;
    addStdSArtCheck.checked = false;
    addStdSTdCheck.checked = false;
    addStdSPeCheck.checked = false;
    addStdSLugCheck.checked = false;
    addStdSKisCheck.checked = false;
    addStdSCreCheck.checked = false;
    addStdSIreCheck.checked = false;

}
function clrCreateEventInputsBtn() {
    eventExpense_input.value = '';
    eventCTerm_input.value = '';
    eventCDate_input.value = '';
    eventDoDate_input.value = '';
    eventTitle_input.value = '';
    eventDesc_input.value = '';
}
function saveCreateEventInputBtn() {
    let confirmation = confirm("Are sure you want to save the Event ")
    if (confirmation) {
        switch (saveEventFlag) {
            case 1:
                console.log('Creating: '+eventTitle_input.value)
                saveAddEventsFunc();
                break;
            case 2:
                console.log('Editing: '+eventTitle_input.value)
                editEventsFunc(targetEventId);
                break;
        }
        clrCreateEventInputsBtn()
    } else {
        alert("You denied to save the Event..!")
    }
}
function saveCreateEventInputAndExitBtn() {
    let confirmation = confirm("Are sure you want to save the Event and Exit.")
    if (confirmation) {
        saveCreateEventInputBtn();
        closeStdPopUpBtn();
    } else {
        alert("You denied to save the Event and Exit..!")
    }
}

function getAllEventsBtn() {
    getAllEventsFunc();
}

function editEventsBtn(index) {
    console.log(eventsArr[index])
    saveEventFlag = 2;
    targetEventId = eventsArr[index]._id;
    eventExpense_input.value = Number(eventsArr[index].expense);
    eventCTerm_input.value = eventsArr[index].cterm;
    eventCDate_input.value = eventsArr[index].cdate;
    eventDoDate_input.value = eventsArr[index].dodate;
    eventTitle_input.value = eventsArr[index].title;
    eventDesc_input.value = eventsArr[index].desc;
    openCreateEventFunc();
}


let eventsArr = [];
let saveEventFlag
async function getAllEventsFunc() {
    let dbname = 'communication'
    let cname = `events_${new Date().getFullYear()}`;
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/getallevents/${dbname}/${cname}`);
        const data = await res.json();
        eventsArr = await data;
        loader.style.display = '';
        displayAllEvents()
    } catch (err) {
        console.error(`Ooh_GET_Fetching_AllEvents :: ${err.name}_${err.message}`);
    }
}
function displayAllEvents() {
    console.log(eventsArr)
    let card = '';
    eventsArr.forEach((event,i) => {
        let EventTitle = event.title;
        let EventDesc = event.desc;
        let EventExpense = event.expense;
        let EventCDate = event.cdate;
        let EventCTerm = event.cterm;
        let EventDoDate = event.dodate;

        card += `
            <div class="bar1 bar">
                                <div class="bar_firsrt">
                                    <div class="div_1">
                                        <div class="event_title">
                                            <h2>${EventTitle}</h2>
                                        </div>
                                        <div class="event_indicator">
                                            <span>Status</span>
                                            <span><button onclick="viewEventBtn(${i})">View</button></span>
                                        </div>
                                    </div>
                                    <div class="div_2">
                                        <p>
                                             ${EventDesc}
                                        </p>
                                    </div>
                                    <div class="div_3">
                                        <span>Created on: ${EventCDate}</span>
                                        <span>Do Date: ${EventDoDate}</span>
                                    </div>
                                </div>
                                <div class="bar_second">
                                    <span onclick="editEventsBtn(${i})"><img src="assets/icons/edit_loght.png" alt=""></span>
                                    <span class="delete_event_icon" onclick="deleteEventsBtn(${i})"><img src="assets/icons/delete_light.png" alt=""></span>
                                    <span><label><input onchange="getEventStatusCheck(${this.value})" type="checkbox" id="eventStatusCheck"></label></span>
                                </div>
                            </div>
        ` 
    })
    eventBars.innerHTML = card;
}

async function saveAddEventsFunc() {
    let dbname = 'communication'
    let cname = `events_${new Date().getFullYear()}`
    let eventObj = {
        title: eventTitle_input.value,
        desc: eventDesc_input.value,
        expense: Number(eventExpense_input.value),
        cdate: eventCDate_input.value,
        dodate: eventDoDate_input.value,
        cterm: eventCTerm_input.value,
        status: eventStatus
    }
    
    try {
        const res = await fetch(`${url}/createfees/${dbname}/${cname}`, {
            method: 'POST',
            headers: {
                'Content-type':'Application/json'
            },
            body: JSON.stringify(eventObj)
        })
        const data = await res.json();
        console.log(data)
        getAllEventsFunc()
    } catch (err) {
        console.error(`Ooh_POST_Creating_Event :: ${err.name}_${err.message}`);
    }
}
function viewEventBtn(index) {
    alert(`Viewing ${eventsArr[index].title} event`)
}

let eventStatus = ""

function getEventStatusCheck(e) {
    console.log(e)
}

async function editEventsFunc(id) {
    saveEventFlag = 2;
    let dbname = 'communication'
    let cname = `events_${new Date().getFullYear()}`;
    let eventUpdates = {
        title: eventTitle_input.value,
        desc: eventDesc_input.value,
        expense: Number(eventExpense_input.value),
        cdate: eventCDate_input.value,
        dodate: eventDoDate_input.value,
        cterm: eventCTerm_input.value,
        status: eventStatus
    }

    try {
        const  res = await fetch(`${url}/updateschsetings/${dbname}/${cname}/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(eventUpdates)
        });
        const data  = await res.json();
        console.log(data)
        getAllEventsFunc()
    } catch (err) {
        console.error(`Ooh_PATCH_Editing_Event :: ${err.name}_${err.message}`);

    }
}
function deleteEventsBtn(index) {
    msgBox_flag = 'delete_events';
    deleteEvents_index = index;
    msgIdentifierTitle.innerHTML = `Delete Event`
    msgIdentifierIcon.src = 'assets/icons/deleteWarning.png'
    msgIdentifierText.innerHTML = `
        Are sure to delete the Records for<br><b>${eventsArr[index].title}</b>
        `;
    warning_msg_pops.style.display = 'flex';
}
async function deleteEventsFunc(index) {
    let id = eventsArr[index]._id;
    let dbname = 'communication'
    let cname = `events_${selectEventYear.value}`;
    try {
        const res = await fetch(`${url}/deletevent/${dbname}/${cname}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json'
            }
        })
        const data = await res.json();
        getAllEventsFunc()
    } catch (err) {
        console.error(`Ooh_DELETE_Deleting_Event :: ${err.name}_${err.message}`);
    
    }
}

function generateStdIdBtn() {
    let randNo = Math.floor(Math.random() * 1000);
    adminStdGeneratedId = randNo;
    addStdGeneratedStdId.innerText = `ST0${adminStdGeneratedId}`;
}

function getAdminSTdsBtn() {
    readAdminSTdsFunc();
}


function saveAddStdInputBtn() {
    let confirmation = confirm("Are you shure you want to Save")
    if (confirmation) {
        switch (saveAdminFlag) {
            case 1:
                saveAddStdInputFunc();
                break;
            case 2:
                editAddStdInputFunc(editAdminStdId);
                closeStdPopUpBtn();
                break;
        }

    } else {
        alert('You denied...');
    }
}

function saveAddStdInputAndExitBtn() {
    let confirmation = confirm("Are you shure you want to Save and Exit")
    if (confirmation == true) {
        saveAddStdInputBtn();
        closeStdPopUpBtn();
    } else {
        alert("You denied save and Exit")
    }
}

let sortAdminStdsBy = document.getElementById('sortAdminStdsBy');
//SORTING STUDENTS
sortAdminStdsBy.addEventListener('change', () => {
    switch (sortAdminStdsBy.value) {
        case 'name_a_z':
             adminStdDataArr.sort((a,b) => {
                let namesA = a.dets.fname.toLowerCase();
                let namesB = b.dets.fname.toLowerCase();
                if (namesA > namesB) {
                    return 1;
                } else if (namesA < namesB ) {
                    return -1;
                }
             })
             displayAdminStdData();
        break;
        case 'name_z_a':
             adminStdDataArr.sort((a,b) => {
                let namesA = a.dets.fname.toLowerCase();
                let namesB = b.dets.fname.toLowerCase();
                if (namesA > namesB) {
                    return -1;
                } else if (namesA < namesB ) {
                    return 1;
                }
             })
             displayAdminStdData();
        break;
        case 'gender_m':
            adminStdDataArr.sort((a,b) => {
                let namesA = a.dets.gender.toLowerCase();
                let namesB = b.dets.gender.toLowerCase();
                if (namesA > namesB) {
                    return -1;
                } else if (namesA < namesB) {
                    return 1;
                }
            })
            displayAdminStdData();
            break;
        case 'gender_f':
            adminStdDataArr.sort((a,b) => {
                let namesA = a.dets.gender.toLowerCase();
                let namesB = b.dets.gender.toLowerCase();
                if (namesA > namesB) {
                    return 1;
                } else if (namesA < namesB) {
                    return -1;
                }
            })
            displayAdminStdData();
            break;
        case 'bursary':
            adminStdDataArr.sort((a,b) => {
                let namesA = a.dets.bursary.toLowerCase();
                let namesB = b.dets.bursary.toLowerCase();
                if (namesA > namesB) {
                    return -1;
                } else if (namesA < namesB) {
                    return 1;
                }
            })
            displayAdminStdData();
            break;
        default :
        readAdminSTdsFunc();
        break;

    }
})

function EditAdminStdBtn(index) {
    saveAdminFlag = 2;
    editAdminStdId = adminStdDataArr[index]._id;

    addStdSelectedPhotoSrc = adminStdDataArr[index].dets.photo;
    addStdPhotoSelected.src = addStdSelectedPhotoSrc;
    addStdGeneratedStdId.innerText = adminStdDataArr[index].dets.stId;
    addStdFname.value = adminStdDataArr[index].dets.fname;
    addStdMname.value = adminStdDataArr[index].dets.mname;
    addStdLname.value = adminStdDataArr[index].dets.lname;
    addStdDob.value = adminStdDataArr[index].dets.dob;
    addStdSelectedGender.value = adminStdDataArr[index].dets.gender;
    addStdSelectedClass.value = Number(adminStdDataArr[index].dets.class);
    addStdSelectedAdmissionClass.value = Number(adminStdDataArr[index].dets.admission.class);
    addSelectedEntryDate.value = adminStdDataArr[index].dets.admission.date;
    addIsBusary.value = adminStdDataArr[index].dets.bursary;
    addStdNationality.value = adminStdDataArr[index].dets.nationality;
    addStdDistrict.value = adminStdDataArr[index].dets.district;
    addStdSCounty.value = adminStdDataArr[index].dets.address;

    addStdPFname.value = adminStdDataArr[index].dets.parent.name;
    // addStdPLname.value = '';
    addStdSelectedRelative.value = adminStdDataArr[index].dets.parent.relationship;
    addStdPRelativeContact.value = adminStdDataArr[index].dets.parent.number;
    addStdPRelativeEmail.value = adminStdDataArr[index].dets.parent.email;
    
    addStdHCondition.value = adminStdDataArr[index].dets.health.condition;
    addStdHDrName.value = adminStdDataArr[index].dets.health.doctorName;
    addStdHDrContact.value = adminStdDataArr[index].dets.health.doctorContact;

    let compSujcts = adminStdDataArr[index].dets.subjects.compulsory; 
    let optnSujcts = adminStdDataArr[index].dets.subjects.optianals;
    
    for (let i=0; i<addStdCSbjctCheck.length; i++) {
        if (compSujcts.includes(addStdCSbjctCheck[i].value)) {
            addStdCSbjctCheck[i].checked = true;
        }
    }
    for (let i=0; i<addStdOSbjctCheck.length; i++) {
        if (optnSujcts.includes(addStdOSbjctCheck[i].value)) {
            addStdOSbjctCheck[i].checked = true;
        }
    }
    openAddStdPopFunc()
}

function DeleteAdminStdBtn(index) {
    deleteAdminStd_id = adminStdDataArr[index]._id;
    msgBox_flag = 'delete_admin_std';
    
    msgIdentifierTitle.innerHTML = `Delete Student's Records`
    msgIdentifierIcon.src = 'assets/icons/deleteWarning.png'
    msgIdentifierText.innerHTML = `
        Are sure to delete the Records for<br><b>${adminStdDataArr[index].dets.fname}</b>
        `;
    warning_msg_pops.style.display = 'flex';
    // if (deletComfirmation) {
    //     editAdminStdId = adminStdDataArr[index]._id;
    //     DeleteAdminStdFunc(editAdminStdId);
    // } else {
    //     alert("You denied deleting a Student...!")
    // }
}
function ViewAdminStdBtn(index) {
    alert(`Viewing... ${adminStdDataArr[index].dets.fname}`)
}

const adminSTDinput = document.querySelectorAll('.adminSTDinput');
const addStdMarksInput = document.querySelectorAll('.addStdMarksInput');
const feesInputs = document.querySelectorAll('.feesInputs');
const addTeacherInputs = document.querySelectorAll('.addTeacherInputs');
const eventInputs = document.querySelectorAll('.eventInputs');

function activateInputs() {
    let adminSTDinputCount = 0;
    let addStdMarksInputCount = 0;
    let feesInputsCount = 0;
    let addTeacherInputsCount = 0;
    let eventInputsCount = 0;
    adminSTDinput.forEach((elem,i) => {
        elem.addEventListener('keypress', (e) => {
            adminSTDinputCount = i;
            console.log(e.key+" in input "+adminSTDinputCount)
            if (e.key == 'Enter') {
                adminSTDinputCount += 1
                if (adminSTDinputCount > (adminSTDinput.length - 1)) {
                    adminSTDinputSubmitBTN()
                    return 0;
                }
                adminSTDinput[adminSTDinputCount].focus()
            }
        })
    })
    addStdMarksInput.forEach((elem,i) => {
        elem.addEventListener('keypress', (e) => {
            addStdMarksInputCount = i;
            console.log(e.key+" in input "+addStdMarksInputCount)
            if (e.key == 'Enter') {
                addStdMarksInputCount += 1
                if (addStdMarksInputCount > (addStdMarksInput.length - 1)) {
                    addStdMarksInputSubmitBTN()
                    return 0;
                }
                addStdMarksInput[addStdMarksInputCount].focus()
            }
        })
    })
    feesInputs.forEach((elem,i) => {
        elem.addEventListener('keypress', (e) => {
            feesInputsCount = i;
            console.log(e.key+" in input "+feesInputsCount)
            if (e.key == 'Enter') {
                feesInputsCount += 1
                if (feesInputsCount > (feesInputs.length - 1)) {
                    // feesInputsSubmitBTN()
                    return 0;
                }
                feesInputs[feesInputsCount].focus()
            }
        })
    })
    addTeacherInputs.forEach((elem,i) => {
        elem.addEventListener('keypress', (e) => {
            addTeacherInputsCount = i;
            console.log(e.key+" in input "+addTeacherInputsCount)
            if (e.key == 'Enter') {
                addTeacherInputsCount += 1
                if (addTeacherInputsCount > (addTeacherInputs.length - 1)) {
                    addTeacherInputsSubmitBTN()
                    return 0;
                }
                addTeacherInputs[addTeacherInputsCount].focus()
            }
        })
    })
    eventInputs.forEach((elem,i) => {
        elem.addEventListener('keypress', (e) => {
            eventInputsCount = i;
            console.log(e.key+" in input "+eventInputsCount)
            if (e.key == 'Enter') {
                eventInputsCount += 1
                if (eventInputsCount > (eventInputs.length - 1)) {
                    eventInputsSubmitBTN()
                    return 0;
                }
                eventInputs[eventInputsCount].focus()
            }
        })
    })
}
activateInputs()
function adminSTDinputSubmitBTN() {
    console.log('Submiting')
    saveAddStdInputBtn()
}
function addStdMarksInputSubmitBTN() {
    console.log('Submiting')
    saveAddStdMarksInputBtn()
}
function addTeacherInputsSubmitBTN() {
    console.log('Submiting')
    saveAddTeacherInputBtn();
}
function eventInputsSubmitBTN() {
    console.log('Submiting')
    saveCreateEventInputBtn()
}

// All Warning message Pop Functionality

let warning_msg_pops = document.querySelector('.warning_msg_pops')
let closeMsgPopIcon = document.getElementById('closeMsgPopIcon');
let msgIdentifierTitle = document.getElementById('msgIdentifierTitle');
let msgIdentifierIcon = document.getElementById('msgIdentifierIcon');
let msgIdentifierText = document.getElementById('msgIdentifierText');

let msgBox_flag = '';
let deleteAdminStd_id;
let deleteAdminStdMarks_index;
let deleteTeacher_index;
let deleteEvents_index;

let msg_Error_flag = '';

function msgBoxReturnTrueBtn() {
    switch(msgBox_flag) {
        case 'delete_admin_std':
            DeleteAdminStdFunc(deleteAdminStd_id);
            break;
        case 'delete_std_marks':
            DeleteAdminStdMarksFunc(deleteAdminStdMarks_index);
            break;
        case 'delete_teacher':
            deleteTeacherDataFunc(deleteTeacher_index);
            break;
        case 'delete_events': 
            deleteEventsFunc(deleteEvents_index);
            break;
    }
    warning_msg_pops.style.display = ''
}
// DeleteAdminStdBtn
function msgBoxReturnFalseBtn() {
    warning_msg_pops.style.display = ''
}
closeMsgPopIcon.addEventListener('click', () => {
    msgBoxReturnFalseBtn();
});
//Reading Admin Students
let url = `http://localhost:5000`

let adminStdGeneratedId = 'ST';
let date = new Date().getFullYear();
let adminStdYear = date;
let adminStdClass = `form_1`;
let adminStdDataArr = [];
let saveAdminFlag = 1;
let editAdminStdId;
stdManagementYearIdentifier.innerHTML = adminStdYear;

stdNavSelectYear.addEventListener('change', () => {
    stdManagementYearIdentifier.innerHTML = stdNavSelectYear.value
    adminStdYear = stdNavSelectYear.value;
    readAdminSTdsFunc()
})
async function readAdminSTdsFunc() {
    sortAdminStdsBy.value = ''
    adminStdYear = stdNavSelectYear.value;
    stdManagementYearIdentifier.innerHTML = adminStdYear
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/getalladminstds/admin_${adminStdYear}/${adminStdClass}`);
        const data = await res.json();
        adminStdDataArr = await data;
        loader.style.display = '';
        displayAdminStdData();
    } catch (err) {
        console.error(`Ooh_GET_All_AdminStds :: ${err.name}_${err.message}`);
    }
}
function displayAdminStdData() {
    let td = '';
    adminStdDataArr.forEach((student,i) => {
        let stNo = (i+1);
        let stId = student.dets.stId;
        let stFname = student.dets.fname;
        let stMname = student.dets.mname;
        let stLname = student.dets.lname;
        let stGendar = student.dets.gender;
        let stClass = student.dets.class;
        let stDob = student.dets.dob;
        let stEntryYear = student.dets.admission.date;
        let stEntryClass = student.dets.admission.class;
        let stPhoto = student.dets.photo;
        let stBursary = student.dets.bursary;
        let stFormerSchool = student.dets.formerSchool;
        let stNationality = student.dets.nationality;
        let stDistrict = student.dets.district;
        let stSCounty = student.dets.address;
        let stPname = student.dets.parent.name;
        let stPcontact = student.dets.parent.number;

        td += `
        <tr>
            <td>${stNo} </td> 
            <td><img src="${stPhoto}"> </td> 
            <td>${stId} </td> 
            <td>${stFname} ${stMname} ${stLname} </td>
            <td>${stGendar} </td> 
            <td>${stClass} </td> 
            <td>${stDob} </td> 
            <td>${stEntryYear} </td>
            <td>${stEntryClass} </td>
            <td>${stBursary} </td>
            <td>${stFormerSchool} </td>
            <td>${stSCounty} </td>
            <td>${stPname} </td>
            <td id="actionBtns">
                <img src="assets/icons/view_dark.png" class="view_icon action_icons" onclick="ViewAdminStdBtn(${i})">
                <img src="assets/icons/edit_dark.png" class="edit_icon action_icons" onclick="EditAdminStdBtn(${i})">
                <img src="assets/icons/delete_dark.png" class="delete_icon action_icons" onclick="DeleteAdminStdBtn(${i})">
            </td> 
        </tr>
        `
    })
    adminStdTableBdy.innerHTML = td; 
}


//COUNTING ALL TEACHERS AND STUDENTS
let total_no_stds = document.getElementById('total_no_stds')
let no_MTeachers = document.querySelector('#no_MTeachers');
let no_FTeachers = document.querySelector('#no_FTeachers');
let no_MStudents = document.querySelector('#no_MStudents');
let no_FStudents = document.querySelector('#no_FStudents');

let bar_chart_1 = document.getElementById('bar_chart_1');
let bar_chart_2 = document.getElementById('bar_chart_2');

let total_no_stdsFlag = 0;

let maleStudents = [];
let FmaleStudents = [];
let nonGenderStudents = [];
let maleTeachers = [];
let FmaleTeachers = [];
nonGenderTeachers = [];

let no_clearedArr = [];
let no_wallet_blcArr = [];
let no_defaultersArr = [];
let no_on_bursaryArr = [];

let allStdsClasses = [];
async function countAllStudents() {
   
    let CurrentYear = new Date().getFullYear();
    
    try {
        allStdsClasses = [];
        total_no_stdsFlag = 0;
        maleStudents = [];
        FmaleStudents = []
        loader.style.display = 'flex';
        for (let i=1; i<=6; i++) {
            const res = await fetch(`${url}/getalladminstds/admin_${CurrentYear}/form_${i}`);
            const studentsByClass = await res.json();
            studentsByClass.forEach((student,i) =>  {  
                //Counting all Students   
                allStdsClasses.push(student)
                // Checking for student's gender
                if (student.dets.gender == 'm') {
                    maleStudents.push(student)
                } else if (student.dets.gender == 'f'){
                    FmaleStudents.push(student)
                } else {
                    nonGenderStudents.push(student)
                }
                //Checking for student's Fees Clearance
                if (student.fees.one.payAcc > 0 ) {
                    no_wallet_blcArr.push(student)
                } else if (student.fees.one.status == 'cleared') {
                  no_clearedArr.push(student)  
                } else if (((student.dets.bursary != 'yes') || (student.dets.bursary != true) || (student.dets.bursary != 'true') ) && (student.fees.one.status != 'cleared')) {
                    no_defaultersArr.push(student)
                } else if ((student.dets.bursary == 'yes') || (student.dets.bursary == 'true') || (student.dets.bursary == true)) {
                    no_on_bursaryArr.push(student)
                }
            })
        }
        loader.style.display = '';

        total_no_stds.innerText = 0;
        let totalStdsCountInterval = setInterval(() => {
            total_no_stdsFlag += 1;
            total_no_stds.innerText = total_no_stdsFlag;
            if (total_no_stdsFlag >= allStdsClasses.length) {
                clearInterval(totalStdsCountInterval)
                return 0;
            }
        },25);

        renderChartFunc()
        renderPieChartFunc()
    } catch (err) {
        console.error(`Getting All Students to count the Totatl :: ${err.name}_${err.message}`)
    }
}
let total_no_teachers = document.getElementById('total_no_teachers')
let total_no_teachersFlag = 0;
let allTeachersArray = [];
async function countAllTeachers() {

    let CurrentYear = new Date().getFullYear();
    
    try {
        allTeachersArray = [];
        total_no_teachersFlag = 0;
        loader.style.display = 'flex';
        console.log("Reading Teachers' Data")
        const res = await fetch(`${url}/getalladminstds/teachers/teachers_${CurrentYear}`);
        const rslt = await res.json();
        const data = await rslt;
        console.log(data)
        allTeachersArray = await data;
        loader.style.display = '';

        total_no_teachers.innerText = 0;
        let totalTeachersCountInterval = setInterval(() => {
            total_no_teachersFlag += 1;
            total_no_teachers.innerText = total_no_teachersFlag;
            if (total_no_teachersFlag >= allTeachersArray.length) {
                clearInterval(totalTeachersCountInterval)
                return 0;
            }
        },100);

        allTeachersArray.forEach((teacher,i) => {
            if (teacher.dets.gender == 'm') {
                maleTeachers.push(teacher)
            } else if (teacher.dets.gender == 'f'){
                FmaleTeachers.push(teacher)
            } else {
                    nonGenderTeachers.push(teacher)
                }
            })
        
    } catch (err) {
        console.error(`Getting All Teachers to count the Totatl :: ${err.name}_${err.message}`)
    }
}

//Counting and Generating the charts

let no_MTeachersFlag = 0;
let no_FTeachersFlag = 0;
let no_MStudentsFlag = 0;
let no_FStudentsFlag = 0;

function renderChartFunc() {
    let xValues = ["M-Students","F-Students","TT-Students","M-Teachers","F-Teachers","TT-Teachers"]
    let yValues = [
        maleStudents.length,
        FmaleStudents.length,
        allStdsClasses.length,
        maleTeachers.length,
        FmaleTeachers.length,
        allTeachersArray.length
    ]
    const bgColors  = ['rgb(183, 0, 255)','rgb(255, 0, 123)','rgb(174, 126, 4)','rgb(3, 198, 136)','rgb(50, 151, 44)']

    new Chart('bar_chart_1',{
        type:'bar',
        data: {
            labels:xValues,
            datasets: [{
                backgroundColor: bgColors,
                data: yValues
            }]
        },
        options: {
            title:{text:'Comparisions'}
        }
    })

    no_MTeachers.innerText = 0;
    no_FTeachers.innerText = 0;
    no_MStudents.innerText = 0;
    no_FStudents.innerText = 0;

    let totalMTeachersCountInterval = setInterval(() => {
        no_MTeachersFlag += 1;
        no_MTeachers.innerText = no_MTeachersFlag;
        if (no_MTeachersFlag >= maleTeachers.length) {
             clearInterval(totalMTeachersCountInterval)
            return 0;
            }
        },100);

    let totalFTeachersCountInterval = setInterval(() => {
        no_FTeachersFlag += 1;
        no_FTeachers.innerText = no_FTeachersFlag;
        if (no_FTeachersFlag >= FmaleTeachers.length) {
             clearInterval(totalFTeachersCountInterval)
            return 0;
            }
        },100);

    let totalMStudentsCountInterval = setInterval(() => {
        no_MStudentsFlag += 1;
        no_MStudents.innerText = no_MStudentsFlag;
        if (no_MStudentsFlag >= maleStudents.length) {
             clearInterval(totalMStudentsCountInterval)
            return 0;
            }
        },100);

    let totalFStudentsCountInterval = setInterval(() => {
        no_FStudentsFlag += 1;
        no_FStudents.innerText = no_FStudentsFlag;
        if (no_FStudentsFlag >= FmaleStudents.length) {
             clearInterval(totalFStudentsCountInterval)
            return 0;
            }
        },100);
        renderPieChartFunc()
}

let no_cleared = document.querySelector('#no_cleared');
let no_wallet_blc = document.querySelector('#no_wallet_blc');
let no_defaulters = document.querySelector('#no_defaulters');
let no_on_bursary = document.querySelector('#no_on_bursary');

let no_clearedFlag = 0;
let no_wallet_blcFlag = 0;
let no_defaultersFlag = 0;
let no_on_bursaryFlag = 0;

function renderPieChartFunc() {
    let xValues = ["Cleared","On Bursary","Defaulters","Blc on Wallet"]
    let yValues = [
        no_clearedArr.length,
        no_on_bursaryArr.length,
        no_defaultersArr.length,
        no_wallet_blcArr.length
    ]
    const bgColors  = ['navy','gold','fuchsia','teal','orange']

    new Chart('bar_chart_2',{
        type:'doughnut',
        data: {
            labels:xValues,
            datasets: [{
                backgroundColor: bgColors,
                data: yValues
            }]
        },
        options: {
            title:{text:'Comparisions'}
        }
    })
    no_cleared.innerHTML = no_clearedArr.length; 
    no_wallet_blc.innerHTML = no_wallet_blcArr.length; 
    no_defaulters.innerHTML = no_defaultersArr.length; 
    no_on_bursary.innerHTML = no_on_bursaryArr.length; 

    no_wallet_blc.innerText = 0;
    no_cleared.innerText = 0;
    no_defaulters.innerText = 0;
    no_on_bursary.innerText = 0;

    let totalno_on_walletCountInterval = setInterval(() => {
        no_wallet_blcFlag += 1;
        no_wallet_blc.innerText = no_wallet_blcFlag;
        if (no_wallet_blcFlag >= maleTeachers.length) {
             clearInterval(totalno_on_walletCountInterval)
            return 0;
            }
        },100);

    let totalFTeachersCountInterval = setInterval(() => {
        no_clearedFlag += 1;
        no_cleared.innerText = no_clearedFlag;
        if (no_clearedFlag >= FmaleTeachers.length) {
             clearInterval(totalFTeachersCountInterval)
            return 0;
            }
        },100);

    let totalMStudentsCountInterval = setInterval(() => {
        no_defaultersFlag += 1;
        no_defaulters.innerText = no_defaultersFlag;
        if (no_defaultersFlag >= maleStudents.length) {
             clearInterval(totalMStudentsCountInterval)
            return 0;
            }
        },100);

    let totalFStudentsCountInterval = setInterval(() => {
        no_on_bursaryFlag += 1;
        no_on_bursary.innerText = no_on_bursaryFlag;
        if (no_on_bursaryFlag >= no_on_bursaryArr.length) {
             clearInterval(totalFStudentsCountInterval)
            return 0;
            }
        },100);
}

function openAddStdPopFunc() {
    pop_ups_box.style.display = 'flex';
    pop_up_card_1.style.display = 'block';
}
function openAddStdMarksPopFunc() {
    pop_ups_box.style.display = 'flex';
    pop_up_card_2.style.display = 'block';
}
function openCreateDatabasePopFunc() {
    pop_ups_box.style.display = 'flex';
    pop_up_card_3.style.display = 'block';
}
function openCreateEventFunc() {
    pop_ups_box.style.display = 'flex';
    pop_up_card_6.style.display = 'block';
}
function openManageStdFeesPopFunc() {
    pop_ups_box.style.display = 'flex';
    pop_up_card_4.style.display = 'block';
}

let addStdSelectedPhotoSrc = 'assets/icons/user_dark.png';
addSelectStdPhoto.addEventListener('change', () => {
    let reader = new FileReader();
    let file = addSelectStdPhoto.files[0];
    reader.onload = (e) => {
        addStdSelectedPhotoSrc = e.target.result;
        addStdPhotoSelected.src = addStdSelectedPhotoSrc;
    }
    reader.readAsDataURL(file);
})

async function saveAddStdInputFunc() {
    // if (adminStdImg_flag == 'changed') {
    //     STDPhoto = addStdSelectedPhotoSrc
    // } else {

    // }
    saveAdminFlag = 1;
    let compulsorySubjects = [];
    let optianalSubjects = [];
    let insertData = {};
    addStdCSbjctCheck.forEach(sub => {
        if (sub.checked == true) {
            compulsorySubjects.push(sub.value);
        }
    })
    addStdOSbjctCheck.forEach(sub => {
        if (sub.checked == true) {
            optianalSubjects.push(sub.value);
        }
    })

    let principleMoney;
    insertData = {
        dets: {
            stId: addStdGeneratedStdId.innerText,
            fname: addStdFname.value,
            mname: addStdMname.value,
            lname: addStdLname.value,
            class: addStdSelectedClass.value,
            gender: addStdSelectedGender.value,
            photo: addStdSelectedPhotoSrc,
            nationality: addStdNationality.value,
            dob: addStdDob.value,
            formerSchool: addStdFormerSch.value,
            entryYear: '',
            entryMonth: '',
            bursary: addIsBusary.value,
            address: addStdSCounty.value,
            district: addStdDistrict.value,
            country: addStdNationality.value,
            parent: {
                name: `${addStdPFname.value}`,
                relationship: addStdSelectedRelative.value,
                number: addStdPRelativeContact.value,
                email: addStdPRelativeEmail.value,
                address: '',
                occupation: '',
                emergencyContact: '',
            },
            admission: {
                admissionNumber: '',
                date: addSelectedEntryDate.value,
                class: addStdSelectedAdmissionClass.value,
            },
            health: {
                condition: addStdHCondition.value,
                doctorName: addStdHDrName.value,
                doctorContact: addStdHDrContact,
            },
            subjects: {
                compulsory: compulsorySubjects,
                optianals: optianalSubjects
            }
        },
        fees: {
            one: {
                principle:principleMoney,
                amountPaid:0,
                blc:principleMoney,
                percentPaid:0,
                percentblc:100,
                status:'not Cleared',
                payDate:'',
                payAcc:0
            },
            two: {
                principle:principleMoney,
                amountPaid:0,
                blc:principleMoney,
                percentPaid:0,
                percentblc:100,
                status:'not Cleared',
                payDate:'',
                payAcc:0
            },
            three: {
                principle:principleMoney,
                amountPaid:0,
                blc:principleMoney,
                percentPaid:0,
                percentblc:100,
                status:'not Cleared',
                payDate:'',
                payAcc:0
            }
        }
    }
    try {
        loader.style.display = 'flex';
        const res1 = await fetch(`${url}/getfees/settings/fees_data/${adminStdYear}`);
        const prinFee = await res1.json();
        switch (adminStdClass) {
            case 'form_1':
                principleMoney = await prinFee[0].form_1.principle;
                break;
            case 'form_2':
                principleMoney = await prinFee[0].form_2.principle;
                break;
            case 'form_3':
                principleMoney = await prinFee[0].form_3.principle;
                break;
            case 'form_4':
                principleMoney = await prinFee[0].form_4.principle;
                break;
            case 'form_5':
                principleMoney = await prinFee[0].form_5.principle;
                break;
            case 'form_6':
                principleMoney = await prinFee[0].form_6.principle;
                break;

        }

        const res = await fetch(`${url}/addadminstd/admin_${adminStdYear}/${adminStdClass}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(insertData)
        });
        const data = await res.json();
        loader.style.display = '';
        readAdminSTdsFunc();
    } catch (err) {
        console.error(`Ooh_GET_Getttinging_FeesPrincple :: ${err.name}_${err.message}`)
    }
}

let compulsorySubjects = [];
let optianalSubjects = [];
async function editAddStdInputFunc(id) {
    addStdCSbjctCheck.forEach(sub => {
        if (sub.checked == true) {
            compulsorySubjects.push(sub.value);
        }
    })
    addStdOSbjctCheck.forEach(sub => {
        if (sub.checked == true) {
            optianalSubjects.push(sub.value);
        }
    })

    let updates = {
        dets: {
            stId: addStdGeneratedStdId.innerText,
            fname: addStdFname.value,
            mname: addStdMname.value,
            lname: addStdLname.value,
            class: addStdSelectedClass.value,
            gender: addStdSelectedGender.value,
            photo: addStdSelectedPhotoSrc,
            nationality: addStdNationality.value,
            dob: addStdDob.value,
            formerSchool: addStdFormerSch.value,
            entryYear: '',
            entryMonth: '',
            bursary: addIsBusary.value,
            address: addStdSCounty.value,
            district: addStdDistrict.value,
            country: addStdNationality.value,
            parent: {
                name: `${addStdPFname.value}`,
                relationship: addStdSelectedRelative.value,
                number: addStdPRelativeContact.value,
                email: addStdPRelativeEmail.value,
                address: '',
                occupation: '',
                emergencyContact: '',
            },
            admission: {
                admissionNumber: '',
                date: addSelectedEntryDate.value,
                class: addStdSelectedAdmissionClass.value,
            },
            health: {
                condition: addStdHCondition.value,
                doctorName: addStdHDrName.value,
                doctorContact: addStdHDrContact.value,
            },
            subjects: {
                compulsory: compulsorySubjects,
                optianals: optianalSubjects
            }
        }
    }
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/updateadminstd/admin_${adminStdYear}/${adminStdClass}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(updates)
        })
        const rslt = await res.json();
        loader.style.display = '';
        readAdminSTdsFunc();
    } catch (err) {
        console.error(`Ooh_PATCH_EditAdminStudent :: ${err.name}_${err.message}`);
    }
}
async function DeleteAdminStdFunc(id) {
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/deleteadminstd/admin_${adminStdYear}/${adminStdClass}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'Application/json'
            }
        });
        const rslt = await res.json();
        loader.style.display = '';
        readAdminSTdsFunc();
    } catch (err) {
        console.error(`Ooh_POST_InsertStudent :: ${err.name}_${err.message}`);
    }
}

//==========| STUDENT'S MARKS
//BTNS
function generateStdMarksIdBtn() {
    let randNo = Math.floor(Math.random() * 1000);
    adminStdGeneratedId = randNo;
    addStdGeneratedStdMarksId.innerText = `ST0${adminStdGeneratedId}`;
}
function addStudentMarksBtn() {
    saveAdminMarksFlag = 1;
    body_frame_2_adminStdMarks.style.visibility = 'visible';
    
    openAddStdMarksPopFunc()
}
function clrAddStdMarksInputsBtn() {

    adminStdMarksPhy1.value = '';
    adminStdMarksPhy2.value = '';
    adminStdMarksChem1.value = '';
    adminStdMarksChem2.value = '';
    adminStdMarksMaths1.value = '';
    adminStdMarksMaths2.value = '';
    adminStdMarksBio1.value = '';
    adminStdMarksBio2.value = '';
    adminStdMarksGeog1.value = '';
    adminStdMarksGeog2.value = '';
    adminStdMarksHis1.value = '';
    adminStdMarksHis2.value = '';
    adminStdMarksEng1.value = '';
    adminStdMarksEng2.value = '';

    adminStdMarksIct1.value = '';
    adminStdMarksIct2.value = '';
    adminStdMarksAgric1.value = '';
    adminStdMarksAgric2.value = '';
    adminStdMarksEnt1.value = '';
    adminStdMarksEnt2.value = '';
    adminStdMarksArt1.value = '';
    adminStdMarksArt2.value = '';
    adminStdMarksTd1.value = '';
    adminStdMarksTd2.value = '';
    adminStdMarksPe1.value = '';
    adminStdMarksPe2.value = '';
    adminStdMarksLug1.value = '';
    adminStdMarksLug2.value = '';
    adminStdMarksKis1.value = '';
    adminStdMarksKis2.value = '';
    adminStdMarksCre1.value = '';
    adminStdMarksCre2.value = '';
    adminStdMarksIre1.value = '';
    adminStdMarksIre2.value = '';
}
function saveAddStdMarksInputBtn() {
    let confirmation = confirm("Do you want to save marks")
    if (confirmation) {
        switch (saveAdminMarksFlag) {
            case 1 :
                addAdminStdMarksFunc();
                break;
            case 2 :
                EditAdminStdMarksFunc(update_adminMarks_id);
                break;
            default: 
                alert("The flag ( saveAdminMarksFlag )is empty.... Check 'saveAddStdMarksInputBtn' Function");
                break;
        }
    } else {
        alert('You deneid to save..!')
    }
}
function saveAddStdMarksInputAndExitBtn() {
    let confirmation = confirm('Do yount to save the marks and exit.')
    if (confirmation) {
        saveAddStdMarksInputBtn()
        closeStdPopUpBtn()
    } else {
        alert("You denied to save and exit ..!")
    }
}
function readAdminStdsMarksBtn() {
    readAdminStdsMarksFunc()
}

let adminStdMarksYear = new Date().getFullYear();
let adminStdMarksClass = 'form_1';
let adminStdMarksTerm = 1;
let adminStdMarksExam = 'bot';
let adminstdMarksArr = [];
let update_adminMarks_id;
let saveAdminMarksFlag = 1;

//FUNCS

stdNavselectstdMarksYear.addEventListener('change', () => {
    adminStdMarksYear = stdNavselectstdMarksYear.value.slice(0,4);
    adminStdMarksTerm = stdNavselectstdMarksYear.value.slice(5,6);
    adminStdMarksExam = stdNavselectstdMarksYear.value.slice(7,stdNavselectstdMarksYear.value.length);
    readAdminStdsMarksFunc();
})
stdNavselectstdMarksTerm.addEventListener('change', () => {
    adminStdMarksTerm = stdNavselectstdMarksTerm.value;
    readAdminStdsMarksFunc()
})
stdNavGradesSelectYear.addEventListener('change', () => {
    gradesYear = stdNavGradesSelectYear.value.slice(0,4);
    gradesTerm = stdNavGradesSelectYear.value.slice(5,6);
    gradesExam = stdNavGradesSelectYear.value.slice(7,stdNavGradesSelectYear.value.length);
    stdNavGradesSelectTerm.value = ''
    stdNavGradesSelectExam.value = ''
    readGradesFunc()
})
stdNavGradesSelectTerm.addEventListener('change', () => {
    gradesTerm = stdNavGradesSelectTerm.value;
    readGradesFunc()
    
})
stdNavGradesSelectExam.addEventListener('change', () => {
    gradesExam = stdNavGradesSelectExam.value;
    readGradesFunc()
    
})

stdNavselectstdMarksExam.addEventListener('change', () => {
    adminStdMarksExam = stdNavselectstdMarksExam.value;
    readAdminStdsMarksFunc();
})
stdNavselectstdFeesYear.addEventListener('change', () => {
    adminStdFeesYear = stdNavselectstdFeesYear.value//.slice(0,4);
    feesYearIdentifier.innerHTML = stdNavselectstdFeesYear.value//.slice(0,4);
    getFee()
    // adminStdFeesTerm = stdNavselectstdFeesTerm.value.slice(5,6);
    // adminStdFeesExam = stdNavselectstdFeesExam.value.slice(7,stdNavselectstdFeesYear.value.length);
})
stdNavselectstdFeesTerm.addEventListener('change', () => {
    adminStdFeesTerm = Number(stdNavselectstdFeesTerm.value);
    feesTermIdentifier.innerHTML = Number(stdNavselectstdFeesTerm.value);
    // getFees();
    getFee()
})


let marksDBSortedArr = [];
let feesDBSortedArr = [];
//Rendering marks databases
function renderMarksDBs() {
    marksDBSortedArr = [];
    feesDBSortedArr = [];
    let marksDBOptns = '';
    let td = '';
    marksDBArr.forEach((db,i) => {
        let dbName = db.DBname
        let trm = db.dets.term
        let exm = db.dets.exam
        let obj = new Object();
        obj.dbYear = Number(dbName.slice(6,dbName.length));
        obj.dbTerm = db.dets.term;
        obj.dbExam = db.dets.exam;
        // marksDBSortedArr.push(Number(dbName.slice(6,dbName.length)));
        marksDBSortedArr.push(obj);
        td += `
        <tr> 
        <td>${i+1}</td>
        <td>${dbName}</td>
        <td>${trm}</td>
        <td>${exm}</td>
        <td>
            <button onclick="deleteAdminMarksDBBtn(${i})">Delete</button>
        </td>
        </tr>
        `
    })
    marksDBSortedArr.sort((a,b) => (b.dbYear - a.dbYear) || (b.dbTerm - a.dbTerm));
    marksDBSortedArr.forEach((db,i) => {
        marksDBOptns += `
        <option value="${db.dbYear}_${db.dbTerm}_${db.dbExam}">${db.dbYear}_${db.dbTerm}_${db.dbExam}</option>
        `
    })
    stdNavselectstdMarksYear.innerHTML = marksDBOptns;
    stdNavGradesSelectYear.innerHTML = marksDBOptns;
    marksDetstbdy.innerHTML = td;
}
function renderDetsDBs() {
    let detsDBOptns = '';
    let detsDBSortedArr = [];
    let td = ''
    detsDBArr.forEach((db,i) => {
        let dbName = db.DBname
        detsDBSortedArr.push(Number(dbName.slice(6,dbName.length)));
        td += `
        <tr> 
        <td>${i+1}</td>
        <td>${dbName}</td>
        <td>
            <button onclick="deleteAdminDBBtn(${i})">Delete</button>
        </td>
        </tr>
        `
    })
    detsDBSortedArr.sort((a,b) => b - a);
    detsDBSortedArr.forEach((db,i) => {
        detsDBOptns += `
        <option value="${db}">${db}</option>
        `
    })
    stdNavSelectYear.innerHTML = detsDBOptns
    copyAdminStdsDetsFrom.innerHTML = detsDBOptns;
    copyAdminStdsDetsFromForFees.innerHTML = detsDBOptns;
    stdNavselectstdFeesYear.innerHTML = detsDBOptns
    adminDetstbdy.innerHTML = td; 
}
async function readAdminStdsMarksFunc() {
    sortMaksBy.value = '';
   try {
        loader.style.display = 'flex';
        adminstdMarksArr = [];
        let dbname = `marks_${stdNavselectstdMarksYear.value.slice(0,4)}`;
        let cname = adminStdMarksClass;
        const res  = await fetch(`${url}/getdata/${dbname}/${cname}/${adminStdMarksTerm}/${adminStdMarksExam}`);
        const data = await res.json();
        adminstdMarksArr = await data;
        loader.style.display = '';
        displayAdminStdMarksFunc();
    } catch (err) {
        console.error(`Ooh.._GETStudentsByExam :: ${err.name}_${err.message}`);
    }
}

//>>>>>>>>>>>>>>>>>> SORTING <<<<<<<<<<<<<<<<<

let sortMaksBy = document.getElementById('sortMaksBy');
sortMaksBy.addEventListener('change', () => {
    switch (sortMaksBy.value) {
        case 'name_a_z':
            adminstdMarksArr.sort((a,b) => {
                let namesA = a.dets.fname.toLowerCase();
                let namesB = b.dets.fname.toLowerCase();
                
                if (namesA > namesB) {
                    return 1;
                } else if (namesA < namesB) {
                    return -1
                }
                return 0;
            })
            displayAdminStdMarksFunc()
            break;
        case 'phy':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (((Number(b.marks.phy1) + Number(b.marks.phy2))/2).toFixed(1)) - ((Number(a.marks.phy1) + Number(a.marks.phy2))/2).toFixed(1)
            })
            displayAdminStdMarksFunc()
            break;
        case 'chem':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (((Number(b.marks.chem1) + Number(b.marks.chem2))/2).toFixed(1)) - ((Number(a.marks.chem1) + Number(a.marks.chem2))/2).toFixed(1)
            })
            displayAdminStdMarksFunc()
            break;
        case 'maths':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (Number(b.marks.maths1)) - (Number(a.marks.maths1))
            })
            displayAdminStdMarksFunc()
            break;
        case 'bio':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (((Number(b.marks.bio1) + Number(b.marks.bio2))/2).toFixed(1)) - ((Number(a.marks.bio1) + Number(a.marks.bio2))/2).toFixed(1)
            })
            displayAdminStdMarksFunc()
            break;
        case 'geog':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (Number(b.marks.geog1)) - (Number(a.marks.geog1))
            })
            displayAdminStdMarksFunc()
            break;
        case 'his':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (Number(b.marks.his1)) - (Number(a.marks.his1))
            })
            displayAdminStdMarksFunc()
            break;
        case 'eng':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (Number(b.marks.eng1)) - (Number(a.marks.eng1))
            })
            displayAdminStdMarksFunc()
            break;
        case 'ict':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (((Number(b.marks.ict1) + Number(b.marks.ict2))/2).toFixed(1)) - ((Number(a.marks.ict1) + Number(a.marks.ict2))/2).toFixed(1)
            })
            displayAdminStdMarksFunc()
            break;
        case 'ent':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (Number(b.marks.ent1)) - (Number(a.marks.ent1))
            })
            displayAdminStdMarksFunc()
            break;
        case 'agric':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (((Number(b.marks.agric1) + Number(b.marks.agric2))/2).toFixed(1)) - ((Number(a.marks.agric1) + Number(a.marks.agric2))/2).toFixed(1)
            })
            displayAdminStdMarksFunc();
        case 'art':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (((Number(b.marks.art1) + Number(b.marks.art2))/2).toFixed(1)) - ((Number(a.marks.art1) + Number(a.marks.art2))/2).toFixed(1)
            })
            displayAdminStdMarksFunc();
        case 'td':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (((Number(b.marks.td1) + Number(b.marks.td2))/2).toFixed(1)) - ((Number(a.marks.td1) + Number(a.marks.td2))/2).toFixed(1)
            })
            displayAdminStdMarksFunc();
        case 'lit':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (Number(b.marks.lit1)) - (Number(a.marks.lit1))
            })
            displayAdminStdMarksFunc();
        case 'pe':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (((Number(b.marks.pe1) + Number(b.marks.pe2))/2).toFixed(1)) - ((Number(a.marks.pe1) + Number(a.marks.pe2))/2).toFixed(1)
            })
            displayAdminStdMarksFunc();
        case 'cre':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (Number(b.marks.cre1)) - (Number(a.marks.cre1))
            })
            displayAdminStdMarksFunc();
        case 'ire':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (Number(b.marks.ire1)) - (Number(a.marks.ire1))
            })
            displayAdminStdMarksFunc();
        case 'lug':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (Number(b.marks.lug1)) - (Number(a.marks.lug1))
            })
            displayAdminStdMarksFunc();
        case 'kis':
            console.log('Sorting Physics: '+sortMaksBy.value)
            adminstdMarksArr.sort((a,b) => {
                return (Number(b.marks.kis1)) - (Number(a.marks.kis1))
            })
            displayAdminStdMarksFunc();
        default:
            readAdminStdsMarksFunc();
            break;

    }
})
function displayAdminStdMarksFunc() {
    let td = '';
    adminstdMarksArr.forEach((student,i) => {
        let stNo = i+1;
        let stPhoto = student.dets.photo;
        let stID = student.dets.stId;
        let stClass = student.dets.class;
        let stFname = student.dets.fname;
        let stMname = student.dets.mname;
        let stLname = student.dets.lname;

        let stPhy = ((Number(student.marks.phy1) + Number(student.marks.phy2))/2).toFixed(1);
        let stChem = ((Number(student.marks.chem1) + Number(student.marks.chem2))/2).toFixed(1);
        let stBio = ((Number(student.marks.bio1) + Number(student.marks.bio2))/2).toFixed(1);
        let stIct = ((Number(student.marks.ict1) + Number(student.marks.ict2))/2).toFixed(1);
        let stAgric = ((Number(student.marks.agric1) + Number(student.marks.agric2))/2).toFixed(1);
        let stArt = ((Number(student.marks.art1) + Number(student.marks.art2))/2).toFixed(1);
        let stPe = ((Number(student.marks.pe1) + Number(student.marks.pe2))/2).toFixed(1);
        let stTd = ((Number(student.marks.td1) + Number(student.marks.td2))/2).toFixed(1);
        let stMaths = (Number(student.marks.maths1));
        let stEng = (Number(student.marks.eng1));
        let stGeog = (Number(student.marks.geog1));
        let stHis = (Number(student.marks.his1));
        let stEnt = (Number(student.marks.ent1));
        let stLit = (Number(student.marks.lit1));
        let stKis = (Number(student.marks.kis1));
        let stLug = (Number(student.marks.lug1));
        let stCre = (Number(student.marks.cre1));
        let stIre = (Number(student.marks.ire1));

        td += `
        <tr> 
            <td>${stNo}</td>
            <td><img src="${stPhoto}"></td>
            <td>${stID}</td>
            <td>${stFname} ${stMname} ${stLname}</td>
            <td>${stClass}</td>
            <td>${stPhy}</td>
            <td>${stChem}</td>
            <td>${stMaths}</td>
            <td>${stBio}</td>
            <td>${stGeog}</td>
            <td>${stHis}</td>
            <td>${stEng}</td>
            <td>${stIct}</td>
            <td>${stEnt}</td>
            <td>${stAgric}</td>
            <td>${stArt}</td>
            <td>${stTd}</td>
            <td>${stLit}</td>
            <td>${stPe}</td>
            <td>${stCre}</td>
            <td>${stIre}</td>
            <td>${stLug}</td>
            <td>${stKis}</td>
            <td id="actionBtns">
                <img src="assets/icons/view_dark.png" class="view_icon action_icons" onclick="ViewAdminStdMarksBtn(${i})">
                <img src="assets/icons/edit_dark.png" class="edit_icon action_icons" onclick="EditAdminStdMarksBtn(${i})">
                <img src="assets/icons/delete_dark.png" class="delete_icon action_icons" onclick="DeleteAdminStdMarksBtn(${i})">
                
            </td>
        </tr>
        `
    })
    adminStdMarksTbdy.innerHTML = td;
}


function EditAdminStdMarksBtn(index) {
    body_frame_2_adminStdMarks.style.visibility = 'hidden'
    saveAdminMarksFlag = 2;
    update_adminMarks_id = index;
    adminStdMarksPhy1.value = adminstdMarksArr[index].marks.phy1;
    adminStdMarksPhy2.value = adminstdMarksArr[index].marks.phy2;
    adminStdMarksChem1.value = adminstdMarksArr[index].marks.chem1;
    adminStdMarksChem2.value = adminstdMarksArr[index].marks.chem2;
    adminStdMarksMaths1.value = adminstdMarksArr[index].marks.maths1;
    adminStdMarksMaths2.value = adminstdMarksArr[index].marks.maths2;
    adminStdMarksBio1.value = adminstdMarksArr[index].marks.bio1;
    adminStdMarksBio2.value = adminstdMarksArr[index].marks.bio2;
    adminStdMarksGeog1.value = adminstdMarksArr[index].marks.geog1;
    adminStdMarksGeog2.value = adminstdMarksArr[index].marks.geog2;
    adminStdMarksHis1.value = adminstdMarksArr[index].marks.his1;
    adminStdMarksHis2.value = adminstdMarksArr[index].marks.his2;
    adminStdMarksEng1.value = adminstdMarksArr[index].marks.eng1
    adminStdMarksEng2.value = adminstdMarksArr[index].marks.eng2;

    adminStdMarksIct1.value = adminstdMarksArr[index].marks.ict1;
    adminStdMarksIct2.value = adminstdMarksArr[index].marks.ict2;
    adminStdMarksAgric1.value = adminstdMarksArr[index].marks.agric1;
    adminStdMarksAgric2.value = adminstdMarksArr[index].marks.agric2;
    adminStdMarksEnt1.value = adminstdMarksArr[index].marks.ent1;
    adminStdMarksEnt2.value = adminstdMarksArr[index].marks.ent2;
    adminStdMarksArt1.value = adminstdMarksArr[index].marks.art1;
    adminStdMarksArt2.value = adminstdMarksArr[index].marks.art2;
    adminStdMarksTd1.value = adminstdMarksArr[index].marks.td1;
    adminStdMarksTd2.value = adminstdMarksArr[index].marks.td2;
    adminStdMarksLit1.value = adminstdMarksArr[index].marks.lit1;
    adminStdMarksLit2.value = adminstdMarksArr[index].marks.lit2;
    adminStdMarksPe1.value = adminstdMarksArr[index].marks.pe1;
    adminStdMarksPe2.value = adminstdMarksArr[index].marks.pe2;
    adminStdMarksLug1.value = adminstdMarksArr[index].marks.lug1;
    adminStdMarksLug2.value = adminstdMarksArr[index].marks.lug2;
    adminStdMarksKis1.value = adminstdMarksArr[index].marks.kis1;
    adminStdMarksKis2.value = adminstdMarksArr[index].marks.kis2;
    adminStdMarksCre1.value = adminstdMarksArr[index].marks.cre1;
    adminStdMarksCre2.value = adminstdMarksArr[index].marks.cre2;
    adminStdMarksIre1.value = adminstdMarksArr[index].marks.ire1;
    adminStdMarksIre2.value = adminstdMarksArr[index].marks.ire2;
    openAddStdMarksPopFunc();
}

function DeleteAdminStdMarksBtn(index) {
    deleteAdminStdMarks_index = index;
    msgBox_flag = 'delete_std_marks';
    msgIdentifierTitle.innerHTML = `Delete Student's Marks`
    msgIdentifierIcon.src = 'assets/icons/deleteWarning.png'
    msgIdentifierText.innerHTML = `
        Are sure to delete the Marks Records for<br><b>${adminstdMarksArr[deleteAdminStdMarks_index].dets.fname}</b>
        `;
    warning_msg_pops.style.display = 'flex';
}
function ViewAdminStdMarksBtn(index) {
    alert(`Viewing: ${adminstdMarksArr[index].dets.fname}`);
}

//Adding a student marks incase its a new student 
async function addAdminStdMarksFunc() {

    let randNoId = Math.floor(Math.random() * 1000000);
    let alphabates = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let nums = [0,1,2,3,4,5,6,7,8,9];
    let loops = [8,6,12,10];
    let alphLoop = loops[Math.floor(Math.random() * loops.length)]
    let numLoop = loops[Math.floor(Math.random() * loops.length)]
    let randNoChar = [] 
    let randNo = [] 

    for (let i=0; i<alphLoop; i++) {
        randNoChar.push(Math.floor(Math.random() * alphabates.length));
    }
    for (let i=0; i<numLoop; i++) {
        randNo.push(Math.floor(Math.random() * nums.length));
    }

    let adminStdGenerated_doc_Id = `${randNoChar.join('')}_${randNo.join('')}`;
    let bdy = {
        dets: {
            st_Id: adminStdGenerated_doc_Id,
            stId: addStdGeneratedStdMarksId.innerText,
            fname: addStdMarksFname.value,
            mname: addStdMarksMname.value,
            lname: addStdMarksLname.value,
            class: Number(addStdMarksSelectedClass.value),
            photo: '',
            gender: addStdMarksSelectedGender.value,
            subjects: {
                compulsory: ["phy","chem","maths","bio","geog","his","eng"],
                optianals: []
            },
        },
        marks: {
            phy1: Number(adminStdMarksPhy1.value),
            phy2: Number(adminStdMarksPhy2.value),
            chem1: Number(adminStdMarksChem1.value),
            chem2: Number(adminStdMarksChem2.value),
            maths1: Number(adminStdMarksMaths1.value),
            maths2: Number(adminStdMarksMaths2.value),
            bio1: Number(adminStdMarksBio1.value),
            bio2: Number(adminStdMarksBio2.value),
            geog1: Number(adminStdMarksGeog1.value),
            geog2: Number(adminStdMarksGeog2.value),
            his1: Number(adminStdMarksHis1.value),
            his2: Number(adminStdMarksHis2.value),
            ict1: Number(adminStdMarksIct1.value),
            ict2: Number(adminStdMarksIct2.value),
            ent1: Number(adminStdMarksEnt1.value),
            ent2: Number(adminStdMarksEnt2.value),
            agric1: Number(adminStdMarksAgric1.value),
            agric2: Number(adminStdMarksAgric2.value),
            eng1: Number(adminStdMarksEng1.value),
            eng2: Number(adminStdMarksEng2.value),
            lit1: Number(adminStdMarksLit1.value),
            lit2: Number(adminStdMarksLit2.value),
            td1: Number(adminStdMarksTd1.value),
            td2: Number(adminStdMarksTd2.value),
            cre1: Number(adminStdMarksCre1.value),
            cre2: Number(adminStdMarksCre2.value),
            ire1: Number(adminStdMarksIre1.value),
            ire2: Number(adminStdMarksIre2.value),
            pe1: Number(adminStdMarksPe1.value),
            pe2: Number(adminStdMarksPe2.value),
            art1: Number(adminStdMarksArt1.value),
            art2: Number(adminStdMarksArt2.value),
            kis1: Number(adminStdMarksKis1.value),
            kis2: Number(adminStdMarksKis2.value),
            lug1: Number(adminStdMarksLug1.value),
            lug2: Number(adminStdMarksLug2.value),
        },
        filTotals: {
            phy: 0,
            chem: 0,
            maths: 0,
            bio: 0,
            geog: 0,
            his: 0,
            ict: 0,
            ent: 0,
            agric: 0,
            eng: 0,
            lit: 0,
            td: 0,
            cre: 0,
            ire: 0,
            pe: 0,
            art: 0,
            kis: 0,
            lug: 0,
        }
        
    }

    try {
        loader.style.display = 'flex';
        adminstdMarksArr.push(bdy);
        const res = await fetch(`${url}/updatedata/marks_${adminStdMarksYear}/${adminStdMarksClass}/${adminStdMarksTerm}/${adminStdMarksExam}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(adminstdMarksArr)
        });
        const rslt = await res.json();
        loader.style.display = '';
        readAdminStdsMarksFunc();
    } catch (err) {
        console.error(`Ooh..PATCH_Adding_AdminSTDMarks :: ${err.name}_${err.message}`);
    }
}
async function EditAdminStdMarksFunc(i) {

    // adminstdMarksArr[i].marks.phy1 = adminStdMarksPhy1.value;
    adminstdMarksArr[i].marks.phy1 = Number(adminStdMarksPhy1.value)
    adminstdMarksArr[i].marks.phy2 = Number(adminStdMarksPhy2.value)
    adminstdMarksArr[i].marks.chem1 = Number(adminStdMarksChem1.value)
    adminstdMarksArr[i].marks.chem2 = Number(adminStdMarksChem2.value)
    adminstdMarksArr[i].marks.maths1 = Number(adminStdMarksMaths1.value)
    adminstdMarksArr[i].marks.maths2 = Number(adminStdMarksMaths2.value)
    adminstdMarksArr[i].marks.bio1 = Number(adminStdMarksBio1.value)
    adminstdMarksArr[i].marks.bio2 = Number(adminStdMarksBio2.value)
    adminstdMarksArr[i].marks.geog1 = Number(adminStdMarksGeog1.value)
    adminstdMarksArr[i].marks.geog2 = Number(adminStdMarksGeog2.value)
    adminstdMarksArr[i].marks.his1 = Number(adminStdMarksHis1.value)
    adminstdMarksArr[i].marks.his2 = Number(adminStdMarksHis2.value)
    adminstdMarksArr[i].marks.eng1 = Number(adminStdMarksEng1.value)
    adminstdMarksArr[i].marks.eng2 = Number(adminStdMarksEng2.value)

    adminstdMarksArr[i].marks.ict1 = Number(adminStdMarksIct1.value)
    adminstdMarksArr[i].marks.ict2 = Number(adminStdMarksIct2.value)
    adminstdMarksArr[i].marks.agric1 = Number(adminStdMarksAgric1.value)
    adminstdMarksArr[i].marks.agric2 = Number(adminStdMarksAgric2.value)
    adminstdMarksArr[i].marks.ent1 = Number(adminStdMarksEnt1.value)
    adminstdMarksArr[i].marks.ent2 = Number(adminStdMarksEnt2.value)
    adminstdMarksArr[i].marks.art1 = Number(adminStdMarksArt1.value)
    adminstdMarksArr[i].marks.art2 = Number(adminStdMarksArt2.value)
    adminstdMarksArr[i].marks.td1 = Number(adminStdMarksTd1.value)
    adminstdMarksArr[i].marks.td2 = Number(adminStdMarksTd2.value)
    adminstdMarksArr[i].marks.lit1 = Number(adminStdMarksLit1.value)
    adminstdMarksArr[i].marks.lit2 = Number(adminStdMarksLit2.value)
    adminstdMarksArr[i].marks.pe1 = Number(adminStdMarksPe1.value)
    adminstdMarksArr[i].marks.pe2 = Number(adminStdMarksPe2.value)
    adminstdMarksArr[i].marks.lug1 = Number(adminStdMarksLug1.value)
    adminstdMarksArr[i].marks.lug2 = Number(adminStdMarksLug2.value)
    adminstdMarksArr[i].marks.kis1 = Number(adminStdMarksKis1.value)
    adminstdMarksArr[i].marks.kis2 = Number(adminStdMarksKis2.value)
    adminstdMarksArr[i].marks.cre1 = Number(adminStdMarksCre1.value)
    adminstdMarksArr[i].marks.cre2 = Number(adminStdMarksCre2.value)
    adminstdMarksArr[i].marks.ire1 = Number(adminStdMarksIre1.value)
    adminstdMarksArr[i].marks.ire2 = Number(adminStdMarksIre2.value)
    let updates = adminstdMarksArr;

    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/updatedata/marks_${adminStdMarksYear}/${adminStdMarksClass}/${adminStdMarksTerm}/${adminStdMarksExam}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(updates)
        });
        const rslt = await res.json();
        console.log('Results after Updating Marks: ',rslt)
        loader.style.display = '';
        readAdminStdsMarksFunc();
    } catch (err) {
        console.error(`Ooh..PATCH_Editng_AdminSTDMarks :: ${err.name}_${err.message}`);
    }
}

async function DeleteAdminStdMarksFunc(i) {
    console.log("Before :: ",adminstdMarksArr)
    let bdy = adminstdMarksArr.splice(i,1);
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/updatedata/marks_${adminStdMarksYear}/${adminStdMarksClass}/${adminStdMarksTerm}/${adminStdMarksExam}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(adminstdMarksArr)
        });
        const rslt = await  res.json();
        console.log("YEAR :::: "+adminStdMarksYear)
        console.log(rslt)
        loader.style.display = '';
        readAdminStdsMarksFunc();
        
    } catch (err) {
        console.error(`Ooh.._DELETE :: ${err.name}_${err.message}`);
    }
}


//                   Grades and Reports ////////
// let gradesYear = new Date().getFullYear();
// gradesClass = 'form_1';
// let gradesTerm = 1;
// let gradesExam = 'bot';
// let gradesArr = [];
// let gradesArr_2 = [];
// let update_grades_id;
// let saveGradesFlag = 1;

function getGradesBTN() {
    readGradesFunc()
}

let gradesAccTerm = "";
async function readGradesFunc () {
    try {
        loader.style.display = 'flex';
        gradesArr = [];
        let dbname = `marks_${stdNavGradesSelectYear.value.slice(0,4)}`;
        let cname = gradesClass;
        const res  = await fetch(`${url}/getdataterm/${dbname}/${cname}/${gradesTerm}`);
        const data = await res.json();
        gradesAccTerm = gradesTerm;
        switch(gradesExam) {
            case 'bot' :
                gradesArr = await data.bot;
                break;
            case 'mot' :
                gradesArr = await data.mot;
                break;
            case 'eot' :
                gradesArr = await data.eot;
                break;
        }

        loader.style.display = '';
        displayGradesFunc();
    } catch (err) {
        console.error(`Ooh.._GETStudentsByExamForFrading :: ${err.name}_${err.message}`);
    }
}

let reportDiv = document.querySelector('.reportDiv');
let reportDiv_popUp = document.querySelector('.reportDiv_popUp');
let reports_pop_up = document.querySelector('.reports_pop_up');

let numberReports = document.getElementById("numberReports");

function displayGradesFunc() {
    console.log("gradesStats :: ",gradesArr);
    let reportCards = '';
    let numberReportsCount = 0;

    getSchData('sch_data','');
    gradesArr.forEach(student => {
        numberReportsCount += 1;
        let gradesSchName = schDataArr[0].school_name;
        let gradesSchMotor = schDataArr[0].school_motor;
        let gradesSchBadge = schDataArr[0].school_badge;
        let gradesSchEmail = "katikamusdasskakooge@gmail.com";
        let gradesAcademicYear = stdNavGradesSelectYear.value.slice(0,4); 
        let gradesAcademicTerm = gradesAccTerm;
        let gradesStdName = `${student.dets.fname} ${student.dets.mname} ${student.dets.lname}`;
        let gradesStdClass = student.dets.class;
        let gradesSchPayCode = '';
        let gradesStdGender = student.dets.gender;
        
        let gradesPhy = ((Number(student.marks.phy1) + Number(student.marks.phy2))/2).toFixed(1);  
        let gradesChem = ((Number(student.marks.chem1) + Number(student.marks.chem2))/2).toFixed(1);  
        let gradesBio = ((Number(student.marks.bio1) + Number(student.marks.bio2))/2).toFixed(1);  
        let gradesMaths = (Number(student.marks.maths1));
        let gradesEng = (Number(student.marks.eng1));
        let gradesGeog = (Number(student.marks.geog1));
        let gradesHis = (Number(student.marks.his1));
        let gradesIct = ((Number(student.marks.ict1) + Number(student.marks.ict2))/2).toFixed(1);  
        let gradesAgric = ((Number(student.marks.agric1) + Number(student.marks.agric2))/2).toFixed(1);  
        let gradesPe = ((Number(student.marks.pe1) + Number(student.marks.pe2))/2).toFixed(1);  
        let gradesTd = ((Number(student.marks.td1) + Number(student.marks.td2))/2).toFixed(1);  
        let gradesArt = ((Number(student.marks.art1) + Number(student.marks.art2))/2).toFixed(1);  
        let gradesEnt = (Number(student.marks.ent1));
        let gradesLit = (Number(student.marks.lit1));
        let gradesCre = (Number(student.marks.cre1));
        let gradesIre = (Number(student.marks.ire1));
        let gradesLug = (Number(student.marks.lug1));
        let gradesKis = (Number(student.marks.kis1));

        let gradesTotPhy = ((gradesPhy/100)*3).toFixed(1);
        let gradesTotChem = ((gradesChem/100)*3).toFixed(1);
        let gradesTotBio = ((gradesBio/100)*3).toFixed(1);
        let gradesTotMaths = ((gradesMaths/100)*3).toFixed(1);
        let gradesTotEng = ((gradesEng/100)*3).toFixed(1);
        let gradesTotGeog = ((gradesGeog/100)*3).toFixed(1);
        let gradesTotHis = ((gradesHis/100)*3).toFixed(1);
        let gradesTotIct = ((gradesIct/100)*3).toFixed(1);
        let gradesTotAgric = ((gradesAgric/100)*3).toFixed(1);
        let gradesTotPe = ((gradesPe/100)*3).toFixed(1);
        let gradesTotTd = ((gradesTd/100)*3).toFixed(1);
        let gradesTotArt = ((gradesArt/100)*3).toFixed(1);
        let gradesTotEnt = ((gradesEnt/100)*3).toFixed(1);
        let gradesTotLit = ((gradesLit/100)*3).toFixed(1);
        let gradesTotCre = ((gradesCre/100)*3).toFixed(1);
        let gradesTotIre = ((gradesIre/100)*3).toFixed(1);
        let gradesTotLug = ((gradesLug/100)*3).toFixed(1);
        let gradesTotKis = ((gradesKis/100)*3).toFixed(1);

        let gradesGradPhy = ''; 
        let gradesGradChem = '';
        let gradesGradBio = '';
        let gradesGradMaths = '';
        let gradesGradEng = '';
        let gradesGradGeog = '';
        let gradesGradHis = '';
        let gradesGradIct = '';
        let gradesGradAgric = '';
        let gradesGradPe = '';
        let gradesGradTd = '';
        let gradesGradArt = '';
        let gradesGradEnt = '';
        let gradesGradLit = '';
        let gradesGradCre = '';
        let gradesGradIre = '';
        let gradesGradLug = '';
        let gradesGradKis = '';

        let gradesRemarkPhy = ''; 
        let gradesRemarkChem = '';
        let gradesRemarkBio = '';
        let gradesRemarkMaths = '';
        let gradesRemarkEng = '';
        let gradesRemarkGeog = '';
        let gradesRemarkHis = '';
        let gradesRemarkIct = '';
        let gradesRemarkAgric = '';
        let gradesRemarkPe = '';
        let gradesRemarkTd = '';
        let gradesRemarkArt = '';
        let gradesRemarkEnt = '';
        let gradesRemarkLit = '';
        let gradesRemarkCre = '';
        let gradesRemarkIre = '';
        let gradesRemarkLug = '';
        let gradesRemarkKis = '';

        let gradesResult = 1;

        if (gradesPhy >= 85 ) {
            gradesGradPhy = "A";
            gradesRemarkPhy = "Exceptional";  
        } else if (gradesPhy >= 70) {
            gradesGradPhy = "B"; 
            gradesRemarkPhy = "Outstanding";  
        } else if (gradesPhy >= 60) {
            gradesGradPhy = "C"; 
            gradesRemarkPhy = " Satisfactory";  
        }else if (gradesPhy >= 40) {
            gradesGradPhy = "D";  
            gradesRemarkPhy = "Basic";  
        } else {
            gradesGradPhy = "E";
            gradesRemarkPhy = "Elementary";  
        }
        if (gradesChem >= 85 ) {
            gradesGradChem = "A";
            gradesRemarkChem = "Exceptional";  
        } else if (gradesChem >= 70) {
            gradesGradChem = "B"; 
            gradesRemarkChem = "Outstanding";  
        } else if (gradesChem >= 60) {
            gradesGradChem = "C"; 
            gradesRemarkChem = " Satisfactory";  
        }else if (gradesChem >= 40) {
            gradesGradChem = "D";  
            gradesRemarkChem = "Basic";  
        } else {
            gradesGradChem = "E";
            gradesRemarkChem = "Elementary";  
        }
        if (gradesBio >= 85 ) {
            gradesGradBio = "A";
            gradesRemarkBio = "Exceptional";  
        } else if (gradesBio >= 70) {
            gradesGradBio = "B"; 
            gradesRemarkBio = "Outstanding";  
        } else if (gradesBio >= 60) {
            gradesGradBio = "C"; 
            gradesRemarkBio = " Satisfactory";  
        }else if (gradesBio >= 40) {
            gradesGradBio = "D";  
            gradesRemarkBio = "Basic";  
        } else {
            gradesGradBio = "E";
            gradesRemarkBio = "Elementary";  
        }
        if (gradesMaths >= 85 ) {
            gradesGradMaths = "A";
            gradesRemarkMaths = "Exceptional";  
        } else if (gradesMaths >= 70) {
            gradesGradMaths = "B"; 
            gradesRemarkMaths = "Outstanding";  
        } else if (gradesMaths >= 60) {
            gradesGradMaths = "C"; 
            gradesRemarkMaths = " Satisfactory";  
        }else if (gradesMaths >= 40) {
            gradesGradMaths = "D";  
            gradesRemarkMaths = "Basic";  
        } else {
            gradesGradMaths = "E";
            gradesRemarkMaths = "Elementary";  
        }

        if (gradesEng >= 85 ) {
            gradesGradEng = "A";
            gradesRemarkEng = "Exceptional";  
        } else if (gradesEng >= 70) {
            gradesGradEng = "B"; 
            gradesRemarkEng = "Outstanding";  
        } else if (gradesEng >= 60) {
            gradesGradEng = "C"; 
            gradesRemarkEng = " Satisfactory";  
        }else if (gradesEng >= 40) {
            gradesGradEng = "D";  
            gradesRemarkEng = "Basic";  
        } else {
            gradesGradEng = "E";
            gradesRemarkEng = "Elementary";  
        }

        if (gradesGeog >= 85 ) {
            gradesGradGeog = "A";
            gradesRemarkGeog = "Exceptional";  
        } else if (gradesGeog >= 70) {
            gradesGradGeog = "B"; 
            gradesRemarkGeog = "Outstanding";  
        } else if (gradesGeog >= 60) {
            gradesGradGeog = "C"; 
            gradesRemarkGeog = " Satisfactory";  
        }else if (gradesGeog >= 40) {
            gradesGradGeog = "D";  
            gradesRemarkGeog = "Basic";  
        } else {
            gradesGradGeog = "E";
            gradesRemarkGeog = "Elementary";  
        }

        if (gradesHis >= 85 ) {
            gradesGradHis = "A";
            gradesRemarkHis = "Exceptional";  
        } else if (gradesHis >= 70) {
            gradesGradHis = "B"; 
            gradesRemarkHis = "Outstanding";  
        } else if (gradesHis >= 60) {
            gradesGradHis = "C"; 
            gradesRemarkHis = " Satisfactory";  
        }else if (gradesHis >= 40) {
            gradesGradHis = "D";  
            gradesRemarkHis = "Basic";  
        } else {
            gradesGradHis = "E";
            gradesRemarkHis = "Elementary";  
        }

        if (gradesIct >= 85 ) {
            gradesGradIct = "A";
            gradesRemarkIct = "Exceptional";  
        } else if (gradesIct >= 70) {
            gradesGradIct = "B"; 
            gradesRemarkIct = "Outstanding";  
        } else if (gradesIct >= 60) {
            gradesGradIct = "C"; 
            gradesRemarkIct = " Satisfactory";  
        }else if (gradesIct >= 40) {
            gradesGradIct = "D";  
            gradesRemarkIct = "Basic";  
        } else {
            gradesGradIct = "E";
            gradesRemarkIct = "Elementary";  
        }

        if (gradesAgric >= 85 ) {
            gradesGradAgric = "A";
            gradesRemarkAgric = "Exceptional";  
        } else if (gradesAgric >= 70) {
            gradesGradAgric = "B"; 
            gradesRemarkAgric = "Outstanding";  
        } else if (gradesAgric >= 60) {
            gradesGradAgric = "C"; 
            gradesRemarkAgric = " Satisfactory";  
        }else if (gradesAgric >= 40) {
            gradesGradAgric = "D";  
            gradesRemarkAgric = "Basic";  
        } else {
            gradesGradAgric = "E";
            gradesRemarkAgric = "Elementary";  
        }

        if (gradesPe >= 85 ) {
            gradesGradPe = "A";
            gradesRemarkPe = "Exceptional";  
        } else if (gradesPe >= 70) {
            gradesGradPe = "B"; 
            gradesRemarkPe = "Outstanding";  
        } else if (gradesPe >= 60) {
            gradesGradPe = "C"; 
            gradesRemarkPe = " Satisfactory";  
        }else if (gradesPe >= 40) {
            gradesGradPe = "D";  
            gradesRemarkPe = "Basic";  
        } else {
            gradesGradPe = "E";
            gradesRemarkPe = "Elementary";  
        }

        if (gradesTd >= 85 ) {
            gradesGradTd = "A";
            gradesRemarkTd = "Exceptional";  
        } else if (gradesTd >= 70) {
            gradesGradTd = "B"; 
            gradesRemarkTd = "Outstanding";  
        } else if (gradesTd >= 60) {
            gradesGradTd = "C"; 
            gradesRemarkTd = " Satisfactory";  
        }else if (gradesTd >= 40) {
            gradesGradTd = "D";  
            gradesRemarkTd = "Basic";  
        } else {
            gradesGradTd = "E";
            gradesRemarkTd = "Elementary";  
        }
        
        if (gradesArt >= 85 ) {
            gradesGradArt = "A";
            gradesRemarkArt = "Exceptional";  
        } else if (gradesArt >= 70) {
            gradesGradArt = "B"; 
            gradesRemarkArt = "Outstanding";  
        } else if (gradesArt >= 60) {
            gradesGradArt = "C"; 
            gradesRemarkArt = " Satisfactory";  
        }else if (gradesArt >= 40) {
            gradesGradArt = "D";  
            gradesRemarkArt = "Basic";  
        } else {
            gradesGradArt = "E";
            gradesRemarkArt = "Elementary";  
        }
        if (gradesEnt >= 85 ) {
            gradesGradEnt = "A";
            gradesRemarkEnt = "Exceptional";  
        } else if (gradesEnt >= 70) {
            gradesGradEnt = "B"; 
            gradesRemarkEnt = "Outstanding";  
        } else if (gradesEnt >= 60) {
            gradesGradEnt = "C"; 
            gradesRemarkEnt = " Satisfactory";  
        }else if (gradesEnt >= 40) {
            gradesGradEnt = "D";  
            gradesRemarkEnt = "Basic";  
        } else {
            gradesGradEnt = "E";
            gradesRemarkEnt = "Elementary";  
        }
        if (gradesLit >= 85 ) {
            gradesGradLit = "A";
            gradesRemarkLit = "Exceptional";  
        } else if (gradesLit >= 70) {
            gradesGradLit = "B"; 
            gradesRemarkLit = "Outstanding";  
        } else if (gradesLit >= 60) {
            gradesGradLit = "C"; 
            gradesRemarkLit = " Satisfactory";  
        }else if (gradesLit >= 40) {
            gradesGradLit = "D";  
            gradesRemarkLit = "Basic";  
        } else {
            gradesGradLit = "E";
            gradesRemarkLit = "Elementary";  
        }
        if (gradesCre >= 85 ) {
            gradesGradCre = "A";
            gradesRemarkCre = "Exceptional";  
        } else if (gradesCre >= 70) {
            gradesGradCre = "B"; 
            gradesRemarkCre = "Outstanding";  
        } else if (gradesCre >= 60) {
            gradesGradCre = "C"; 
            gradesRemarkCre = " Satisfactory";  
        }else if (gradesCre >= 40) {
            gradesGradCre = "D";  
            gradesRemarkCre = "Basic";  
        } else {
            gradesGradCre = "E";
            gradesRemarkCre = "Elementary";  
        }
        if (gradesIre >= 85 ) {
            gradesGradIre = "A";
            gradesRemarkIre = "Exceptional";  
        } else if (gradesIre >= 70) {
            gradesGradIre = "B"; 
            gradesRemarkIre = "Outstanding";  
        } else if (gradesIre >= 60) {
            gradesGradIre = "C"; 
            gradesRemarkIre = " Satisfactory";  
        }else if (gradesIre >= 40) {
            gradesGradIre = "D";  
            gradesRemarkIre = "Basic";  
        } else {
            gradesGradIre = "E";
            gradesRemarkIre = "Elementary";  
        }
        if (gradesLug >= 85 ) {
            gradesGradLug = "A";
            gradesRemarkLug = "Exceptional";  
        } else if (gradesLug >= 70) {
            gradesGradLug = "B"; 
            gradesRemarkLug = "Outstanding";  
        } else if (gradesLug >= 60) {
            gradesGradLug = "C"; 
            gradesRemarkLug = " Satisfactory";  
        }else if (gradesLug >= 40) {
            gradesGradLug = "D";  
            gradesRemarkLug = "Basic";  
        } else {
            gradesGradLug = "E";
            gradesRemarkLug = "Elementary";  
        }
        if (gradesKis >= 85 ) {
            gradesGradKis = "A";
            gradesRemarkKis = "Exceptional";  
        } else if (gradesKis >= 70) {
            gradesGradKis = "B"; 
            gradesRemarkKis = "Outstanding";  
        } else if (gradesKis >= 60) {
            gradesGradKis = "C"; 
            gradesRemarkKis = " Satisfactory";  
        }else if (gradesKis >= 40) {
            gradesGradKis = "D";  
            gradesRemarkKis = "Basic";  
        } else {
            gradesGradKis = "E";
            gradesRemarkKis = "Elementary";  
        }
        reportCards += 
        `
        <br>
            <div class="report_card">
                                    <div class="card_head">
                                        <div class="badge">
                                            <img src="${gradesSchBadge}" alt="">
                                        </div>
                                        <div class="txt">
                                            <p id="sch_name">
                                                ${gradesSchName}
                                            </p>
                                            <p id="address">
                                                <span>P.O BOX 53,WOBULENZI, UGANDA</span>
                                                <span>Tel: 0765440620/ 0756059212</span>
                                                <span>Email: ${gradesSchEmail}</span>
                                                <span id="sch_motor">"${gradesSchMotor}"</span>
                                            </p>
                                            <p id="level">
                                                O LEVEL ASSESSMENT REPORT, ${gradesAcademicYear}
                                            </p>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="card_intro">
                                        <div class="first">
                                            <p>NAME: <span>${gradesStdName}</span></p>
                                            <p>TERM: <span>${gradesAcademicTerm}</span></p>
                                            <p>SCHOOL PAY CODE: <span>${gradesSchPayCode}</span></p>
                                        </div>
                                        <div class="second">
                                            <p>GENDER: <span>${gradesStdGender}</span></p>
                                            <p>CLASS/STREAM: <span>S.${gradesStdClass} ##</span></p>
                                        </div>
                                    </div>
                                    <div class="bdy">
                                        <div class="intro">
                                            <h3>PERFORMANCE RECORDS</h3>
                                        </div>
                                        <div class="table">
                                            <table border>
                                                <thead>
                                                    <tr>
                                                        <th>SUBJECT</th>
                                                        <th>EOT/60</th>
                                                        <th>100%</th>
                                                        <th>TOT/3</th>
                                                        <th>GRADE</th>
                                                        <th>REMARK</th>
                                                        <th>TEACHER</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="txtsTd">English Language</td>
                                                        <td class="numbersTd">${gradesEng}</td>
                                                        <td class="numbersTd">${gradesEng}</td>
                                                        <td class="numbersTd">${gradesTotEng}</td>
                                                        <td class="numbersTd">${gradesGradEng}</td>
                                                        <td class="txtsTd">${gradesRemarkEng}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">Literature</td>
                                                        <td class="numbersTd">${gradesLit}</td>
                                                        <td class="numbersTd">${gradesLit}</td>
                                                        <td class="numbersTd">${gradesTotLit}</td>
                                                        <td class="numbersTd">${gradesGradLit}</td>
                                                        <td class="txtsTd">${gradesRemarkLit}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">Mathematics</td>
                                                        <td class="numbersTd">${gradesMaths}</td>
                                                        <td class="numbersTd">${gradesMaths}</td>
                                                        <td class="numbersTd">${gradesTotMaths}</td>
                                                        <td class="numbersTd">${gradesGradMaths}</td>
                                                        <td class="txtsTd">${gradesRemarkMaths}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">Physics</td>
                                                        <td class="numbersTd">${gradesPhy}</td>
                                                        <td class="numbersTd">${gradesPhy}</td>
                                                        <td class="numbersTd">${gradesTotPhy}</td>
                                                        <td class="numbersTd">${gradesGradPhy}</td>
                                                        <td class="txtsTd">${gradesRemarkPhy}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">Chemistry</td>
                                                        <td class="numbersTd">${gradesChem}</td>
                                                        <td class="numbersTd">${gradesChem}</td>
                                                        <td class="numbersTd">${gradesTotChem}</td>
                                                        <td class="numbersTd">${gradesGradChem}</td>
                                                        <td class="txtsTd">${gradesRemarkChem}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">Biology</td>
                                                        <td class="numbersTd">${gradesBio}</td>
                                                        <td class="numbersTd">${gradesBio}</td>
                                                        <td class="numbersTd">${gradesTotBio}</td>
                                                        <td class="numbersTd">${gradesGradBio}</td>
                                                        <td class="txtsTd">${gradesRemarkBio}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">Geography</td>
                                                        <td class="numbersTd">${gradesGeog}</td>
                                                        <td class="numbersTd">${gradesGeog}</td>
                                                        <td class="numbersTd">${gradesTotGeog}</td>
                                                        <td class="numbersTd">${gradesGradGeog}</td>
                                                        <td class="txtsTd">${gradesRemarkGeog}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">History & Political Education</td>
                                                        <td class="numbersTd">${gradesHis}</td>
                                                        <td class="numbersTd">${gradesHis}</td>
                                                        <td class="numbersTd">${gradesTotHis}</td>
                                                        <td class="numbersTd">${gradesGradHis}</td>
                                                        <td class="txtsTd">${gradesRemarkHis}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">Luganda</td>
                                                        <td class="numbersTd">${gradesLug}</td>
                                                        <td class="numbersTd">${gradesLug}</td>
                                                        <td class="numbersTd">${gradesTotLug}</td>
                                                        <td class="numbersTd">${gradesGradLug}</td>
                                                        <td class="txtsTd">${gradesRemarkLug}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">Kiswahili</td>
                                                        <td class="numbersTd">${gradesKis}</td>
                                                        <td class="numbersTd">${gradesKis}</td>
                                                        <td class="numbersTd">${gradesTotKis}</td>
                                                        <td class="numbersTd">${gradesGradKis}</td>
                                                        <td class="txtsTd">${gradesRemarkKis}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">Physical Education</td>
                                                        <td class="numbersTd">${gradesPe}</td>
                                                        <td class="numbersTd">${gradesPe}</td>
                                                        <td class="numbersTd">${gradesTotPe}</td>
                                                        <td class="numbersTd">${gradesGradPe}</td>
                                                        <td class="txtsTd">${gradesRemarkPe}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">ICT</td>
                                                        <td class="numbersTd">${gradesIct}</td>
                                                        <td class="numbersTd">${gradesIct}</td>
                                                        <td class="numbersTd">${gradesTotIct}</td>
                                                        <td class="numbersTd">${gradesGradIct}</td>
                                                        <td class="txtsTd">${gradesRemarkIct}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">Entreprenuership</td>
                                                        <td class="numbersTd">${gradesEnt}</td>
                                                        <td class="numbersTd">${gradesEnt}</td>
                                                        <td class="numbersTd">${gradesTotEnt}</td>
                                                        <td class="numbersTd">${gradesGradEnt}</td>
                                                        <td class="txtsTd">${gradesRemarkEnt}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">T.Drawing</td>
                                                        <td class="numbersTd">${gradesTd}</td>
                                                        <td class="numbersTd">${gradesTd}</td>
                                                        <td class="numbersTd">${gradesTotTd}</td>
                                                        <td class="numbersTd">${gradesGradTd}</td>
                                                        <td class="txtsTd">${gradesRemarkTd}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">Art & Craft</td>
                                                        <td class="numbersTd">${gradesArt}</td>
                                                        <td class="numbersTd">${gradesArt}</td>
                                                        <td class="numbersTd">${gradesTotArt}</td>
                                                        <td class="numbersTd">${gradesGradArt}</td>
                                                        <td class="txtsTd">${gradesRemarkArt}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">C.R.E</td>
                                                        <td class="numbersTd">${gradesCre}</td>
                                                        <td class="numbersTd">${gradesCre}</td>
                                                        <td class="numbersTd">${gradesTotCre}</td>
                                                        <td class="numbersTd">${gradesGradCre}</td>
                                                        <td class="txtsTd">${gradesRemarkCre}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">I.R.E</td>
                                                        <td class="numbersTd">${gradesIre}</td>
                                                        <td class="numbersTd">${gradesIre}</td>
                                                        <td class="numbersTd">${gradesTotIre}</td>
                                                        <td class="numbersTd">${gradesGradIre}</td>
                                                        <td class="txtsTd">${gradesRemarkIre}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="txtsTd">Agriculture</td>
                                                        <td class="numbersTd">${gradesAgric}</td>
                                                        <td class="numbersTd">${gradesAgric}</td>
                                                        <td class="numbersTd">${gradesTotAgric}</td>
                                                        <td class="numbersTd">${gradesGradAgric}</td>
                                                        <td class="txtsTd">${gradesRemarkAgric}</td>
                                                        <td class="txtsTd"></td>
                                                    </tr>
                                                    <tr> 
                                                        <td id="gradesRslt" colspan="7"> Result ${gradesResult} </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="bdy_2">
                                        <div class="table_1">
                                            <table border>
                                                <thead>
                                                    <tr id="head_row">
                                                        <th colspan="4">KEYWORDS AND DEFINITION OF TERMS</th>
                                                    </tr>
                                                    <tr>
                                                        <th>IDENTIFIER</th>
                                                        <th>SCORE</th>
                                                        <th> DESCRIPTOR</th>
                                                        <th> SCORE RANGE</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>OUTSTANDING</td>
                                                        <td>Most or all outcomes achieved for overall achievement.</td>
                                                        <td> 2.5 - 3.0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>MODORATE</td>
                                                        <td>Many learning outcomes achieved, enough for overall achievements.</td>
                                                        <td>  1.5 - 2.49</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>BASIC</td>
                                                        <td>
                                                            Few learning outcomes achieved,
                                                            but not sufficient for overall achievement.    
                                                        </td>
                                                        <td>  0.1 - 1.49</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="table_2">
                                            <table border>
                                                <thead>
                                                    <tr>
                                                        <th colspan="2">GRADE AND IDENTIFIER</th>
                                                    </tr>
                                                    <tr>
                                                        <th>GRADE</th>
                                                        <th>IDENTIFIER</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>A (85-100)</td>
                                                        <td> Exceptional</td>
                                                    </tr>
                                                    <tr>
                                                        <td>B (70-84)</td>
                                                        <td> Outstanding</td>
                                                    </tr>
                                                    <tr>
                                                        <td>C (60-69)</td>
                                                        <td> Satisfactory</td>
                                                    </tr>
                                                    <tr>
                                                        <td>D (40-59)</td>
                                                        <td> Basic</td>
                                                    </tr>
                                                    <tr>
                                                        <td>E (0-39)</td>
                                                        <td> Elementary</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="bdy_3">
                                        <div class="comments">
                                            <div class="teachers_comment">
                                                <p>
                                                    Class teacher comments: 
                                                    <span>
                                                        You will get better grades if you improve on your weak areas.
                                                    </span>
                                                </p>
                                                <p>Signature: <span></span></p>
                                            </div>
                                            <div class="head_comment">
                                                <p>
                                                    Head teacher comments: 
                                                    <span>
                                                        Your strengths are evident, and with focus on improving in weaker 
                                                        areas, you have the potential to achieve even better grades.
                                                    </span>
                                                </p>
                                                <p>Signature: <span></span></p>
                                            </div>
                                        </div>
                                        <div class="bdy_3_footer">
                                            <p>This term has ended on: <span> 26/11/2025</span></p>
                                            <p> Next term begins on: <span> 25/01/2026</span></p>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <br>
        
        `
    })
    reportDiv.innerHTML = reportCards;
    reportDiv_popUp.innerHTML = reportCards;
    numberReports.innerText = numberReportsCount;
}

function printGradesReportBtn() {
    reports_pop_up.style.display = "block";
}
function closeGradesReportPopUp() {
    reports_pop_up.style.display = "";
}
function printGradesReportsIcon() {
    window.print();
}

//==========| STUDENT'S FEES COLLECTIONS
//BTNS
function clrStdPayedFeesInputsBtn() {
    feesPayedInput.value = '';
    feesPayDate.value = '';
}
function saveStdPayedFeesInputAndExitBtn() {
    let confirmation = confirm("Are you sure yount to save the Fees Edit and exit.")
    if (confirmation) {
        EditAdminStdFeesFunc(stdFeesIndex)
        clrStdPayedFeesInputsBtn()
        closeStdPopUpBtn();
    } else {
        alert("You denied save Fees and exit ")
    }
}
 function getAdminSTdsFeesBtn() {
    getFee();
 }

 //SORTING TEACHERS
let sortFeesBy = document.getElementById('sortFeesBy');
sortFeesBy.addEventListener('change', () => {
    switch (sortFeesBy.value) {
        case 'name_a_z':
             feesArr.sort((a,b) => {
                let namesA = a.dets.fname.toLowerCase();
                let namesB = b.dets.fname.toLowerCase();
                if (namesA > namesB) {
                    return 1;
                } else if (namesA < namesB ) {
                    return -1;
                }
             })
             displayAdminStdFees();
        break;
        case 'name_z_a':
             feesArr.sort((a,b) => {
                let namesA = a.dets.fname.toLowerCase();
                let namesB = b.dets.fname.toLowerCase();
                if (namesA > namesB) {
                    return -1;
                } else if (namesA < namesB ) {
                    return 1;
                }
             })
             displayAdminStdFees();
        break;
        case 'gender_m':
            feesArr.sort((a,b) => {
                let namesA = a.dets.gender.toLowerCase();
                let namesB = b.dets.gender.toLowerCase();
                if (namesA > namesB) {
                    return -1;
                } else if (namesA < namesB) {
                    return 1;
                }
            })
            displayAdminStdFees();
            break;
        case 'gender_f':
            feesArr.sort((a,b) => {
                let namesA = a.dets.gender.toLowerCase();
                let namesB = b.dets.gender.toLowerCase();
                if (namesA > namesB) {
                    return 1;
                } else if (namesA < namesB) {
                    return -1;
                }
            })
            displayAdminStdFees();
            break;
        case 'amount_paid_a':
            switch (adminStdFeesTerm) {
                case 1: 
                    feesArr.sort((a,b) => a.fees.one.amountPaid - b.fees.one.amountPaid)
                    break; 
                case 2: 
                    feesArr.sort((a,b) => a.fees.one.amountPaid - b.fees.one.amountPaid)
                    break; 
                case 3: 
                    feesArr.sort((a,b) => a.fees.one.amountPaid - b.fees.one.amountPaid)
                    break; 
                }
                displayAdminStdFees();
            break;
        case 'amount_paid_d':
            switch (adminStdFeesTerm) {
                case 1: 
                    feesArr.sort((a,b) => b.fees.one.amountPaid - a.fees.one.amountPaid)
                    break; 
                case 2: 
                    feesArr.sort((a,b) => b.fees.one.amountPaid - a.fees.one.amountPaid)
                    break; 
                case 3: 
                    feesArr.sort((a,b) => b.fees.one.amountPaid - a.fees.one.amountPaid)
                    break; 
                }
                displayAdminStdFees();
            break;
        case 'blc_a':
            switch (adminStdFeesTerm) {
                case 1: 
                    feesArr.sort((a,b) => a.fees.one.blc - b.fees.one.blc)
                    break; 
                case 2: 
                    feesArr.sort((a,b) => a.fees.two.blc - b.fees.one.blc)
                    break; 
                case 3: 
                    feesArr.sort((a,b) => a.fees.three.blc - b.fees.one.blc)
                    break; 
                }
                displayAdminStdFees();
            break;
        case 'blc_d':
            switch (adminStdFeesTerm) {
                case 1: 
                    feesArr.sort((a,b) => b.fees.one.blc - a.fees.one.blc)
                    break; 
                case 2: 
                    feesArr.sort((a,b) => b.fees.two.blc - a.fees.one.blc)
                    break; 
                case 3: 
                    feesArr.sort((a,b) => b.fees.three.blc - a.fees.one.blc)
                    break; 
                }
                displayAdminStdFees();
            break;
        case 'acc_blc':
            switch (adminStdFeesTerm) {
                case 1: 
                    feesArr.sort((a,b) => b.fees.one.payAcc - a.fees.one.payAcc)
                    break; 
                case 2: 
                    feesArr.sort((a,b) => b.fees.two.payAcc - a.fees.two.payAcc)
                    break; 
                case 3: 
                    feesArr.sort((a,b) => b.fees.three.payAcc - a.fees.three.payAcc)
                    break; 
                }
                displayAdminStdFees();
            break;
        case 'pay_status':
            switch (adminStdFeesTerm) {
                case 1: 
                    feesArr.sort((a,b) => {
                        let namesA = a.fees.one.status.toLowerCase();
                        let namesB = b.fees.one.status.toLowerCase();
                        if (namesA > namesB) {
                            return 1;
                        } else if (namesA < namesB ) {
                            return -1;
                        }
                    })
                    break; 
                case 2: 
                    feesArr.sort((a,b) => {
                        let namesA = a.fees.two.status.toLowerCase();
                        let namesB = b.fees.two.status.toLowerCase();
                        if (namesA > namesB) {
                            return 1;
                        } else if (namesA < namesB ) {
                            return -1;
                        }
                    })
                    break; 
                case 3: 
                    feesArr.sort((a,b) => {
                        let namesA = a.fees.three.status.toLowerCase();
                        let namesB = b.fees.three.status.toLowerCase();
                        if (namesA > namesB) {
                            return 1;
                        } else if (namesA < namesB ) {
                            return -1;
                        }
                    })
                    break; 
                }
             displayAdminStdFees();
            break;
        default :
            getFee();
            break;

    }
})

//FUNCS


let feesPayedInput = document.getElementById('feesPayedInput');
let feesPayDate = document.getElementById('feesPayDate');
let stdFeesNavSelectTerm = document.getElementById('stdFeesNavSelectTerm');

let adminStdFeesYear = stdNavselectstdFeesYear.value; 
feesYearIdentifier.innerHTML = adminStdFeesYear; 
let adminStdFeesTerm = Number(stdNavselectstdFeesTerm.value);
feesTermIdentifier.innerHTML = adminStdFeesTerm;
let adminStdFeesExam = 'bot';

let principleFee = 150000;
let feeStatus = '';
let stdFeesIndex = '';
let editAdminStdFeesId = '';

let feesYear = 2026;
let feesClass;
let feesArr = [];
async function getFee() {
    sortFeesBy.value = '';

    adminStdYear = stdNavSelectYear.value;
    adminStdFeesYear = stdNavselectstdFeesYear.value;
    adminStdFeesTerm = stdNavselectstdFeesTerm.value;
    feesYearIdentifier.innerHTML = stdNavselectstdFeesYear.value;
    feesTermIdentifier.innerHTML = Number(stdNavselectstdFeesTerm.value);
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/getalladminstds/admin_${adminStdFeesYear}/${feesClass}`);
        const data = await res.json();
        feesArr = await data;
        const res2 = await fetch(`${url}/getfees/settings/fees_data/${adminStdFeesYear}`);
        const data2 = await res2.json();
        fees_data = await data2;
        loader.style.display = '';

        switch (feesClass) {
            case 'form_1':
                feesArr.forEach(student => {
                    student.fees.one.principle = Number(fees_data[0].form_1.principle);
                    student.fees.two.principle = Number(fees_data[0].form_1.principle);
                    student.fees.three.principle = Number(fees_data[0].form_1.principle);
                   principleFee = Number(fees_data[0].form_1.principle);
                });
                break;
            case 'form_2':
                feesArr.forEach(student => {
                    student.fees.one.principle = Number(fees_data[0].form_2.principle);
                    student.fees.two.principle = Number(fees_data[0].form_2.principle);
                    student.fees.three.principle = Number(fees_data[0].form_2.principle);
                    principleFee = Number(fees_data[0].form_2.principle);
                });
                break;
            case 'form_3':
                feesArr.forEach(student => {
                    student.fees.one.principle = Number(fees_data[0].form_3.principle);
                    student.fees.two.principle = Number(fees_data[0].form_3.principle);
                    student.fees.three.principle = Number(fees_data[0].form_3.principle);
                    principleFee = Number(fees_data[0].form_3.principle);
                });
                break;
            case 'form_4':
                feesArr.forEach(student => {
                    student.fees.one.principle = Number(fees_data[0].form_4.principle);
                    student.fees.two.principle = Number(fees_data[0].form_4.principle);
                    student.fees.three.principle = Number(fees_data[0].form_4.principle);
                    principleFee = Number(fees_data[0].form_4.principle);
                });
                break;
            case 'form_5':
                feesArr.forEach(student => {
                    student.fees.one.principle = Number(fees_data[0].form_5.principle);
                    student.fees.two.principle = Number(fees_data[0].form_5.principle);
                    student.fees.three.principle = Number(fees_data[0].form_5.principle);
                    principleFee = Number(fees_data[0].form_5.principle);
                });
                break;
            case 'form_6':
                feesArr.forEach(student => {
                    student.fees.one.principle = Number(fees_data[0].form_6.principle);
                    student.fees.two.principle = Number(fees_data[0].form_6.principle);
                    student.fees.three.principle = Number(fees_data[0].form_6.principle);
                    principleFee = Number(fees_data[0].form_6.principle);
                });
                break;
        }

        displayAdminStdFees();
    } catch (err) {
        console.error(`Ooh_GET_All_AdminFEES :: ${err.name}_${err.message}`);
    }
}


function displayAdminStdFees() {
    // feesTerm = 2;
    adminStdFeesTerm = Number(stdNavselectstdFeesTerm.value)
    let stNo;
    let stId;
    let stFname;
    let stMname;
    let stLname;
    let stGendar;
    let stPhoto;
    let stBursary;
    let stPname;
    let stPcontact;
    let stFPrinciple;
    let stFAmountPaid;
    let stFBlnc;
    let stFPAmountPaid;
    let stFPBlnc;
    let stFstatus;
    let stFPayDate;
    let stFPayAcc;

    let td = '';

    switch (adminStdFeesTerm) {
        case 1:
                feesArr.forEach((student,i) => {
                stNo = (i+1);
                stId = student.dets.stId;
                stFname = student.dets.fname;
                stMname = student.dets.mname;
                stLname = student.dets.lname;
                stGendar = student.dets.gender;
                stPhoto = student.dets.photo;
                stBursary = student.dets.bursary;
                stPname = student.dets.parent.name;
                stPcontact = student.dets.parent.number;
                stFPrinciple = student.fees.one.principle;
                stFAmountPaid = student.fees.one.amountPaid;
                stFBlnc = student.fees.one.blc;
                stFPAmountPaid = student.fees.one.percentPaid;
                stFPBlnc = student.fees.one.percentblc;
                stFstatus =  student.fees.one.percentPaid == 100 ? 'cleared' : 'not CLear';
                stFPayDate = student.fees.one.payDate;
                stFPayAcc = student.fees.one.payAcc;

                
                td += `
                        <tr>
                            <td>${stNo} </td> 
                            <td><img src="${stPhoto}"> </td> 
                            <td>${stId} </td> 
                            <td>${stFname} ${stMname} ${stLname} </td>
                            <td>${stGendar} </td> 
                            <td>${stFPrinciple} </td> 
                            <td>${stFAmountPaid} </td> 
                            <td>${stFBlnc} </td>
                            <td>${stFPAmountPaid}% </td>
                            <td>${stFPBlnc}% </td>
                            <td>${stFPayDate} </td>
                            <td  id="payment_status">${stFstatus} </td>
                            <td>${stFPayAcc} </td>
                            <td>${stBursary} </td>
                            <td>${stPname} </td>
                            <td id="actionBtns">
                                <img src="assets/icons/view_dark.png" class="view_icon action_icons" onclick="ViewAdminStdFeesBtn(${i})">
                                <img src="assets/icons/edit_dark.png" class="edit_icon action_icons" onclick="EditAdminStdFeesBtn(${i})">
                                
                            </td> 
                        </tr>
                    `
                })
                // let payment_status = document.getElementById('payment_status');
                // if (stFstatus == 'cleared') {
                //     payment_status.style.color = 'green'
                // } else {
                //     payment_status.style.color = 'gold'
                    
                // }
                break; 
        case 2:
                feesArr.forEach((student,i) => {
                stNo = (i+1);
                stId = student.dets.stId;
                stFname = student.dets.fname;
                stMname = student.dets.mname;
                stLname = student.dets.lname;
                stGendar = student.dets.gender;
                stPhoto = student.dets.photo;
                stBursary = student.dets.bursary;
                stPname = student.dets.parent.name;
                stPcontact = student.dets.parent.number;
                stFPrinciple = student.fees.two.principle;
                stFAmountPaid = student.fees.two.amountPaid;
                stFBlnc = student.fees.two.blc;
                stFPAmountPaid = student.fees.two.percentPaid;
                stFPBlnc = student.fees.two.percentblc;
                stFstatus =  student.fees.two.percentPaid == 100 ? 'cleared' : 'not CLear';
                stFPayDate = student.fees.two.payDate;
                stFPayAcc = student.fees.two.payAcc;
                    
                    td += `
                        <tr>
                            <td>${stNo} </td> 
                            <td><img src="${stPhoto}"> </td> 
                            <td>${stId} </td> 
                            <td>${stFname} ${stMname} ${stLname} </td>
                            <td>${stGendar} </td> 
                            <td>${stFPrinciple} </td> 
                            <td>${stFAmountPaid} </td> 
                            <td>${stFBlnc} </td>
                            <td>${stFPAmountPaid}% </td>
                            <td>${stFPBlnc}% </td>
                            <td>${stFPayDate} </td>
                            <td>${stFstatus} </td>
                            <td>${stFPayAcc} </td>
                            <td>${stBursary} </td>
                            <td>${stPname} </td>
                            <td id="actionBtns">
                                <img src="assets/icons/view_dark.png" class="view_icon action_icons" onclick="ViewAdminStdFeesBtn(${i})">
                                <img src="assets/icons/edit_dark.png" class="edit_icon action_icons" onclick="EditAdminStdFeesBtn(${i})">
                            </td> 
                        </tr>
                    `
                })
                break;
        case 3:
                feesArr.forEach((student,i) => {
                stNo = (i+1);
                stId = student.dets.stId;
                stFname = student.dets.fname;
                stMname = student.dets.mname;
                stLname = student.dets.lname;
                stGendar = student.dets.gender;
                stPhoto = student.dets.photo;
                stBursary = student.dets.bursary;
                stPname = student.dets.parent.name;
                stPcontact = student.dets.parent.number;
                stFPrinciple = student.fees.three.principle;
                stFAmountPaid = student.fees.three.amountPaid;
                stFBlnc = student.fees.three.blc;
                stFPAmountPaid = student.fees.three.percentPaid;
                stFPBlnc = student.fees.three.percentblc;
                stFstatus =  student.fees.three.percentPaid == 100 ? 'cleared' : 'not CLear';
                stFPayDate = student.fees.three.payDate;
                stFPayAcc = student.fees.three.payAcc;

                    td += `
                        <tr>
                            <td>${stNo} </td> 
                            <td><img src="${stPhoto}"> </td> 
                            <td>${stId} </td> 
                            <td>${stFname} ${stMname} ${stLname} </td>
                            <td>${stGendar} </td> 
                            <td>${stFPrinciple} </td> 
                            <td>${stFAmountPaid} </td> 
                            <td>${stFBlnc} </td>
                            <td>${stFPAmountPaid}% </td>
                            <td>${stFPBlnc}% </td>
                            <td>${stFPayDate} </td>
                            <td>${stFstatus} </td>
                            <td>${stFPayAcc} </td>
                            <td>${stBursary} </td>
                            <td>${stPname} </td>
                            <td id="actionBtns">
                                <img src="assets/icons/view_dark.png" class="view_icon action_icons" onclick="ViewAdminStdFeesBtn(${i})">
                                <img src="assets/icons/edit_dark.png" class="edit_icon action_icons" onclick="EditAdminStdFeesBtn(${i})">
                            </td> 
                        </tr>
                    `
                })
                break;
    }
   
    adminStdFeesTableBdy.innerHTML = td; 
}

function ViewAdminStdFeesBtn(index) {
    alert(`Viewing ${feesArr[index].dets.fname}'s Fees`);
}

function EditAdminStdFeesBtn(index) {
    feesTerm = 1;
    stdFeesIndex = feesArr[index]._id;
    switch (feesTerm) {
        case 1:
            stdFeesIndex = index
            feesPayedInput.value = feesArr[index].fees.one.amountPaid;
            feesPayDate.value = feesArr[index].fees.one.payDate;
            break;
        case 2:
            stdFeesIndex = index
            feesPayedInput.value = feesArr[index].fees.two.amountPaid;
            feesPayDate.value = feesArr[index].fees.two.payDate;
            break;
        case 3:
            stdFeesIndex = index
            feesPayedInput.value = feesArr[index].fees.three.amountPaid;
            feesPayDate.value = feesArr[index].fees.three.payDate;
            break;
    }
    openManageStdFeesPopFunc();

}
// ll
async function EditAdminStdFeesFunc(i) {
    let payDate = feesPayDate.value
    let paid =  Number(feesPayedInput.value);
    let balance = (principleFee - Number(feesPayedInput.value));
    let perPaid = ((Number(feesPayedInput.value)/principleFee) * 100).toFixed(1);
    let perBalance = (100 - ((Number(feesPayedInput.value)/principleFee) * 100)).toFixed(1);
    let acount = 0; 
    adminStdFeesTerm = Number(stdNavselectstdFeesTerm.value);
    adminStdFeesYear = Number(stdNavselectstdFeesYear.value);
    editAdminStdFeesId = feesArr[i]._id;
    try {
        loader.style.display = 'flex';
        const res1 = await fetch(`${url}/getfees/settings/fees_data/${adminStdFeesYear}`);
        const rslt1 = await res1.json();
        const data = await rslt1;
        loader.style.display = '';
        switch(Number(feesArr[i].dets.class)) {
            case 1:
                feesArr[i].fees.one.principle = Number(data[0].form_1.principle)
                feesArr[i].fees.two.principle = Number(data[0].form_1.principle)
                feesArr[i].fees.three.principle = Number(data[0].form_1.principle)
                principleFee = Number(data[0].form_1.principle);
                break;
            case 2:
                feesArr[i].fees.one.principle = Number(data[0].form_2.principle)
                feesArr[i].fees.two.principle = Number(data[0].form_2.principle)
                feesArr[i].fees.three.principle = Number(data[0].form_2.principle)
                principleFee = Number(data[0].form_2.principle);
                break;
            case 3:
                feesArr[i].fees.one.principle = Number(data[0].form_3.principle)
                feesArr[i].fees.two.principle = Number(data[0].form_3.principle)
                feesArr[i].fees.three.principle = Number(data[0].form_3.principle)
                principleFee = Number(data[0].form_3.principle);
                break;
            case 4:
                feesArr[i].fees.one.principle = Number(data[0].form_4.principle)
                feesArr[i].fees.two.principle = Number(data[0].form_4.principle)
                feesArr[i].fees.three.principle = Number(data[0].form_4.principle)
                principleFee = Number(data[0].form_4.principle);
                break;
            case 5:
                feesArr[i].fees.one.principle = Number(data[0].form_5.principle)
                feesArr[i].fees.two.principle = Number(data[0].form_5.principle)
                feesArr[i].fees.three.principle = Number(data[0].form_5.principle)
                principleFee = Number(data[0].form_5.principle);
                break;
            case 6:
                feesArr[i].fees.one.principle = Number(data[0].form_6.principle)
                feesArr[i].fees.two.principle = Number(data[0].form_6.principle)
                feesArr[i].fees.three.principle = Number(data[0].form_6.principle)
                principleFee = Number(data[0].form_6.principle);
                break;
        }
        

        if (paid >= Number(principleFee)) {
            acount = (paid - Number(principleFee));
            balance = 0;
            perPaid = 100
            perBalance = 0
            feeStatus = 'Cleared';
        } else {
            acount = 0;
            balance = (principleFee - Number(paid));
            feeStatus = 'Not Cleared'; 
        }
        
        let updates = {
            principle: Number(principleFee),
            amountPaid: paid,
            blc: balance,
            status: feeStatus,
            percentPaid: perPaid,
            percentblc: perBalance,
            payDate,
            payAcc: acount
        }

        switch (adminStdFeesTerm) {
            case 1:
                feesArr[i].fees.one = updates;
                break;
            case 2:
                feesArr[i].fees.two = updates;
                break;
            case 3:
                feesArr[i].fees.three = updates;
                break;
        }
        
        const res = await fetch(`${url}/updateadminstdfees/admin_${adminStdFeesYear}/${feesClass}/${editAdminStdFeesId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(feesArr[i].fees)
        })

        const rslt = await res.json();
        // console.log(`After upadint the scholl fees of '${feesArr[i].dets.fname}' from '${feesArr[i].fees.one.amountPaid}: `)
        getFee()
    } catch (err) {
        console.error(`Ooh_PATCH_EditAdminStudent :: ${err.name}_${err.message}`);
    }
}


/*------------------------------| TEACHERS FUCTIONS |------------------------------*/

let addTeacherGeneratedTeacherId = document.getElementById('addTeacherGeneratedTeacherId');
let addTeacherFname = document.getElementById('addTeacherFname');
let addTeacherLname = document.getElementById('addTeacherLname');
let addTeacherDob = document.getElementById('addTeacherDob');
let addTeacherSelectedGender = document.getElementById('addTeacherSelectedGender');
let addTeacherFormerSch = document.getElementById('addTeacherFormerSch');
let addTeacherNationality = document.getElementById('addTeacherNationality');
let addTeacherDistrict = document.getElementById('addTeacherDistrict');
let addTeacherSCounty = document.getElementById('addTeacherSCounty');
let addTeacherEmail = document.getElementById('addTeacherEmail');
let addTeacherNumer = document.getElementById('addTeacherNumer');
let addTeacherNIN = document.getElementById('addTeacherNIN');
let addTeacherHCondition = document.getElementById('addTeacherHCondition');
let addTeacherHDrName = document.getElementById('addTeacherHDrName');
let addTeacherHDrContact = document.getElementById('addTeacherHDrContact');
let addTeacherQfn = document.getElementById('addTeacherQfn');
let addTeacherQfnDesc = document.getElementById('addTeacherQfnDesc');
let addTeacherYearsExp = document.getElementById('addTeacherYearsExp');
let addTeacherMonsExp = document.getElementById('addTeacherMonsExp');
let addTeacherEmpDate = document.getElementById('addTeacherEmpDate');
let addTeacherEmpType = document.getElementById('addTeacherEmpType');
let addTeacherEmpCategory = document.getElementById('addTeacherEmpCategory');
let addTeacherSalary = document.getElementById('addTeacherSalary');
let addTeacherAlc = document.getElementById('addTeacherAlc');
let addTeacherBankName = document.getElementById('addTeacherBankName');
let addTeacherBankAccNo = document.getElementById('addTeacherBankAccNo');
let addTeacherLUsername = document.getElementById('addTeacherLUsername');
let addTeacherLPassword = document.getElementById('addTeacherLPassword');
let addTeacherRoll = document.getElementById('addTeacherRoll');

let addTeacherAbleSbjctCheck = document.querySelectorAll('.addTeacherAbleSbjctCheck');
let addTeacherAsignedSbjctCheck = document.querySelectorAll('.addTeacherAsignedSbjctCheck');

let teachersNavSelectYear = document.getElementById('teachersNavSelectYear');
let teachersDataTbdy = document.getElementById('teachersDataTbdy');


let pop_up_card_5 = document.querySelector('.pop_up_card_5');
let teachersIdentifier = document.getElementById('teachersIdentifier');
let teachers_data_type;

let addTeacherPhotoSelected = document.getElementById('addTeacherPhotoSelected');
let addSelectTeacherPhoto = document.getElementById('addSelectTeacherPhoto');

//BTNs
function teachersAttendanceBtn() {
    //??? Not Explained
    teachersIdentifier.innerText = `Teachers' Attendance`;
    teachers_data_type = `teacher_management`;
    cardDisplayed = teachers_data_type;
    RenderCards();
    openAddStdPopFunc();
}
function teachersAuthoritiesBtn() {
    //??? Not Explained
    teachersIdentifier.innerText = `Duyies`;
    teachers_data_type = `teacher_management`;
    cardDisplayed = teachers_data_type;
    RenderCards()
}
function teachersAddBtn() {
    teachersIdentifier.innerText = `Adding a Teacher`;
    teachers_data_type = `teacher_management`;
    cardDisplayed = teachers_data_type;
    RenderCards();
}
function teachersManageBtn() {
    teachersIdentifier.innerText = `Teachers' Management`;
    teachers_data_type = `teacher_management`;
    cardDisplayed = teachers_data_type;
    RenderCards();
    getTeachersDataFunc();
}
function teachersClassBtn() {
    teachersIdentifier.innerText = `Teachers' Classes`;
    teachers_data_type = `teacher_management`;
    cardDisplayed = teachers_data_type;
    RenderCards();
}

function clrAddTeacherInputsBtn() {
     addTeacherFname.value = '';
     addTeacherLname.value = '';
     teacherImg_seletc_Flag = 'assets/icons/user_dark.png';
     addTeacherPhotoSelected.src = teacherImg_seletc_Flag
     addTeacherDob.value = '';
     addTeacherSelectedGender.value = '';
     addTeacherFormerSch.value = '';
     addTeacherNationality.value = '';
     addTeacherDistrict.value = '';
     addTeacherSCounty.value = '';
     addTeacherEmail.value = '';
     addTeacherNumer.value = '';
     addTeacherNIN.value = '';
     addTeacherHCondition.value = '';
     addTeacherHDrName.value = '';
     addTeacherHDrContact.value = '';
     addTeacherQfn.value = '';
     addTeacherQfnDesc.value = '';
     addTeacherYearsExp.value = '';
     addTeacherMonsExp.value = '';
     addTeacherEmpDate.value = '';
     addTeacherSalary.value = '';
     addTeacherAlc.value = '';
     addTeacherBankName.value = '';
     addTeacherBankAccNo.value = '';
     addTeacherLUsername.value = '';
     addTeacherLPassword.value = '';
     addTeacherRoll.value = '';
     addTeacherEmpType.value = '';
     addTeacherEmpCategory.value = '';
     addTeacherGeneratedTeacherId.innerText = 'T0'

     addTeacherAbleSbjctCheck.forEach(subj => {
        subj.checked = false;
     })
     addTeacherAsignedSbjctCheck.forEach(subj => {
        subj.checked = false;
     })
}
function closeTeacherPopUpBtn() {
    clrAddTeacherInputsBtn();
    pops.forEach(pop => {
        pop.style.display = 'none';
    })
    pop_ups_box.style.display = '';
}
function addTeacherBtn() {
    teachersDataSaveFlag = 1;
    openAddTeacherPopFunc()
}
function saveAddTeacherInputBtn() {
    let confirmation = confirm("Are sure you want to Add the Teachers...?") 
    if (confirmation) {
        switch (teachersDataSaveFlag) {
            case 1:
                saveAddTeacherInputFunc();
                break;
            case 2:
                editTeacherDataFunc(teachersEditedIdFlag,teachersEditedIndexFlag);
                break;
        }
    } else{
        alert("You denied saving the tteacher...!")
    }
}
function saveAddTeacherInputAndExitBtn() {
    let confirmation = confirm("Are sure you want to Add the Teachers. and Exit") 
    if (confirmation) {
        saveAddTeacherInputBtn();
        closeTeacherPopUpBtn();
        getTeachersDataFunc();
    } else {
        alert("You denied saving the tteacher and Exit")
    }
}
function getTeachersDataBtn() {
    getTeachersDataFunc();
}

//FUNCS
function openAddTeacherPopFunc() {
    pop_ups_box.style.display = 'flex';
    pop_up_card_5.style.display = 'block';
}



let teachersArr = [];
let teachersCYear = new Date().getFullYear();
let ableSubjs = [];
let asignedSubjs = [];
let teachersDataSaveFlag;
let teachersEditedIdFlag;
let teachersEditedIndexFlag;

teachersNavSelectYear.addEventListener('change', () => {
    teachersCYear = teachersNavSelectYear.value;
    getTeachersDataFunc()
})

let teacherImg_seletc_Flag = 'assets/icons/user_dark.png';

addSelectTeacherPhoto.addEventListener('change', () => {
    let reader = new FileReader();
    let file = addSelectTeacherPhoto.files[0];
    reader.onload = (e) => {
        teacherImg_seletc_Flag = e.target.result;
        addTeacherPhotoSelected.src = teacherImg_seletc_Flag;
    }
    reader.readAsDataURL(file);
})

function generateTeacherIdBtn() {
    let randomTid = Math.floor(Math.random()*1000); 
    addTeacherGeneratedTeacherId.innerHTML = randomTid
}
async function saveAddTeacherInputFunc() {
    addTeacherAbleSbjctCheck.forEach(subj => {
        if (subj.checked == true) {
            ableSubjs.push(subj.value);
        }
    })
    addTeacherAsignedSbjctCheck.forEach(subj => {
        if (subj.checked == true) {
            asignedSubjs.push(subj.value);
        }
    })
    let data = {
        dets: {
            tId:addTeacherGeneratedTeacherId.innerText,
            fname:addTeacherFname.value,
            lname:addTeacherLname.value,
            gender:addTeacherSelectedGender.value,
            dob:addTeacherDob.value,
            nationality:addTeacherNationality.value,
            district:addTeacherDistrict.value,
            s_count:addTeacherSCounty.value,
            phone:addTeacherNumer.value,
            email:addTeacherEmail.value,
            nin_pn:addTeacherNIN.value,
            photo:teacherImg_seletc_Flag,
            proffession: {
                yrs_exp:addTeacherYearsExp.value,
                mons_exp:addTeacherMonsExp.value,
                former_sch:addTeacherFormerSch.value,
                qfn:addTeacherQfn.value,
                qfn_desc:addTeacherQfnDesc.value,
                able_subjs:ableSubjs,
                asigned_subjs:asignedSubjs,
                emp_date:addTeacherEmpDate.value,
                emp_mon:(new Date().getMonth()+1),
                emp_day:(new Date().getDate()),
                emp_type:addTeacherEmpType.value,
                emp_category:addTeacherEmpCategory.value,
                tcategory:""
            },
            payrole_info:{
                salary:addTeacherSalary.value,
                allc:addTeacherAlc.value,
                bank_name:addTeacherBankName.value,
                bank_acc_no:addTeacherBankAccNo.value
            },
            system:{
                username:addTeacherLUsername.value,
                password:addTeacherLPassword.value,
                role:addTeacherRoll.value
            },
            health:{
                condition:addTeacherHCondition.value,
                dr_name:addTeacherHDrName.value,
                dr_phone:addTeacherHDrContact.value
            }
        }
    }
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/addadminstd/teachers/teachers_${teachersCYear}`,{
            method: 'POST',
            headers: {
                'Content-Type':'Application/json'
            },
            body: JSON.stringify(data)
        })
        loader.style.display = '';
        getTeachersDataFunc()
    } catch(err) {
        console.error(`Ooh: POST_Adding_Teacher :: ${err.name}_${err.message}`)
    }
}

//SORTING TEACHERS
let sortTeachersBy = document.getElementById('sortTeachersBy');
sortTeachersBy.addEventListener('change', () => {
    switch (sortTeachersBy.value) {
        case 'name_a_z':
             teachersArr.sort((a,b) => {
                let namesA = a.dets.fname.toLowerCase();
                let namesB = b.dets.fname.toLowerCase();
                if (namesA > namesB) {
                    return 1;
                } else if (namesA < namesB ) {
                    return -1;
                }
             })
             displayTeachersData();
        break;
        case 'name_z_a':
             teachersArr.sort((a,b) => {
                let namesA = a.dets.fname.toLowerCase();
                let namesB = b.dets.fname.toLowerCase();
                if (namesA > namesB) {
                    return -1;
                } else if (namesA < namesB ) {
                    return 1;
                }
             })
             displayTeachersData();
        break;
        case 'gender_m':
            teachersArr.sort((a,b) => {
                let namesA = a.dets.gender.toLowerCase();
                let namesB = b.dets.gender.toLowerCase();
                if (namesA > namesB) {
                    return -1;
                } else if (namesA < namesB) {
                    return 1;
                }
            })
            displayTeachersData();
            break;
        case 'gender_f':
            teachersArr.sort((a,b) => {
                let namesA = a.dets.gender.toLowerCase();
                let namesB = b.dets.gender.toLowerCase();
                if (namesA > namesB) {
                    return 1;
                } else if (namesA < namesB) {
                    return -1;
                }
            })
            displayTeachersData();
            break;
        case 'work_time':
            teachersArr.sort((a,b) => {
                let namesA = a.dets.proffession.emp_type.toLowerCase();
                let namesB = b.dets.proffession.emp_type.toLowerCase();
                if (namesA > namesB) {
                    return -1;
                } else if (namesA < namesB) {
                    return 1;
                }
            })
            displayTeachersData();
            break;
        default :
            getTeachersDataFunc();
            break;

    }
})

async function getTeachersDataFunc() {
    teachersCYear = teachersNavSelectYear.value;
    try {
        loader.style.display = 'flex';
        console.log("Reading Teachers' Data")
        const res = await fetch(`${url}/getalladminstds/teachers/teachers_${teachersCYear}`);
        const rslt = await res.json();
        const data = await rslt;
        console.log(data)
        teachersArr = await data;
        loader.style.display = '';
        displayTeachersData();
    } catch (err){
        console.error(`Ooh: GET_Getting_Teachers :: ${err.name}_${err.message}`)
    }
}

let teacherId;
let teacherFname; 
let teacherLname; 
let teacherDob; 
let teacherGender;
let teacherFormerSch;
let teacherNationality;
let teacherDistrict;
let teacherSCount;
let teacherEmail;
let teacherNumber;
let teacherNIN;
let teacherHCondotion;
let teacherHDrName;
let teacherHDrContact;
let teacherQfn;
let teacherQfnDesc;
let teacherYrsExp;
let teacherMonsExp;
let teacherEmpDate;
let teacherEmpType;
let teacherEmpCategory;
let teacherSalary;
let teacherAllc;
let teacherBankName;
let teacherBankAccNo;
let teacherLUsername;
let teacherLPassword;
let teacherRoll; 

let ableToTeachSubjs = [];
let asignedToTeachSubjs = [];
function displayTeachersData() {
    let td = '';

    teachersArr.forEach((teacher,i) => {
        teacherId = teacher.dets.tId;
        teacherPhoto = teacher.dets.photo;
        teacherFname = teacher.dets.fname;
        teacherLname = teacher.dets.lname;
        teacherDob = teacher.dets.dob;
        teacherGender = teacher.dets.gender;
        teacherFormerSch = teacher.dets.proffession.former_sch
        teacherNationality = teacher.dets.nationality;
        teacherDistrict = teacher.dets.district;
        teacherSCount = teacher.dets.s_count;
        teacherEmail = teacher.dets.email;
        teacherNumber = teacher.dets.phone;
        teacherNIN = teacher.dets.nin_pn;
        teacherHCondotion = teacher.dets.health.condition;
        teacherHDrName = teacher.dets.health.dr_name
        teacherHDrContact = teacher.dets.health.dr_phone;
        teacherQfn = teacher.dets.proffession.qfn;
        teacherQfnDesc = teacher.dets.proffession.qfn_desc;
        teacherYrsExp = teacher.dets.proffession.yrs_exp;
        teacherMonsExp = teacher.dets.proffession.mons_exp;
        teacherEmpType = teacher.dets.proffession.emp_type;
        teacherEmpCategory = teacher.dets.proffession.emp_category;
        teacherEmpDate = teacher.dets.proffession.emp_date;
        teacherSalary = teacher.dets.payrole_info.salary;
        teacherAllc = teacher.dets.payrole_info.allc;
        teacherBankName = teacher.dets.payrole_info.bank_name;
        teacherBankAccNo = teacher.dets.payrole_info.bank_acc_no;
        teacherLUsername = teacher.dets.system.username;
        teacherLPassword = teacher.dets.system.password;
        teacherRoll = teacher.dets.system.role;

        teacher.dets.proffession.able_subjs.forEach(subj => ableToTeachSubjs.push(subj))
        teacher.dets.proffession.able_subjs.forEach(subj => asignedToTeachSubjs.push(subj))

        td += `
            <tr>
                <td>${i+1} </td>
                <td><img src="${teacherPhoto}"> </td>
                <td>T0${teacherId} </td>
                <td>${teacherFname} ${teacherLname} </td>
                <td>${teacherGender} </td>
                <td>${teacherDob} </td>
                <td>${teacherNationality} </td>
                <td>${teacherDistrict} </td>
                <td>${teacherSCount} </td>
                <td>${teacherQfn} </td>
                <td>${teacherEmpType} </td>
                <td id="actionBtns">
                    <img src="assets/icons/view_dark.png" class="view_icon action_icons" onclick="viewTeacherDataBtn(${i})">
                    <img src="assets/icons/edit_dark.png" class="edit_icon action_icons" onclick="editTeacherDataBtn(${i})">
                    <img src="assets/icons/delete_dark.png" class="delete_icon action_icons" onclick="deleteTeacherDataBtn(${i})">
                </td>
            </tr>
        `
    });
    teachersDataTbdy.innerHTML = td;
}


function viewTeacherDataBtn(index) {
    alert(`Viewing ${teachersArr[index].dets.fname}`)
}
function editTeacherDataBtn(index) {
    teachersDataSaveFlag = 2;
    teachersEditedIdFlag = teachersArr[index]._id;
    teachersEditedIndexFlag = index;

    addTeacherFname.value = teachersArr[index].dets.fname;
    addTeacherLname.value = teachersArr[index].dets.lname;
    addTeacherPhotoSelected.src = teachersArr[index].dets.photo; 
    teacherImg_seletc_Flag = teachersArr[index].dets.photo;
    addTeacherDob.value = teachersArr[index].dets.dob;
    addTeacherSelectedGender.value = teachersArr[index].dets.gender;
    addTeacherFormerSch.value = teachersArr[index].dets.proffession.former_sch;
    addTeacherNationality.value = teachersArr[index].dets.nationality;
    addTeacherDistrict.value = teachersArr[index].dets.district;
    addTeacherSCounty.value = teachersArr[index].dets.s_count;
    addTeacherEmail.value = teachersArr[index].dets.email;
    addTeacherNumer.value = teachersArr[index].dets.phone;
    addTeacherNIN.value = teachersArr[index].dets.nin_pn;
    addTeacherHCondition.value = teachersArr[index].dets.health.condition;
    addTeacherHDrName.value = teachersArr[index].dets.health.dr_name;
    addTeacherHDrContact.value = teachersArr[index].dets.health.dr_phone;
    addTeacherQfn.value = teachersArr[index].dets.proffession.qfn;
    addTeacherQfnDesc.value = teachersArr[index].dets.proffession.qfn_desc;
    addTeacherYearsExp.value = teachersArr[index].dets.proffession.yrs_exp;
    addTeacherMonsExp.value = teachersArr[index].dets.proffession.mons_exp;
    addTeacherEmpDate.value = teachersArr[index].dets.proffession.emp_date;
    addTeacherSalary.value = teachersArr[index].dets.payrole_info.salary;
    addTeacherAlc.value = teachersArr[index].dets.payrole_info.allc;
    addTeacherBankName.value = teachersArr[index].dets.payrole_info.bank_name;
    addTeacherBankAccNo.value = teachersArr[index].dets.payrole_info.bank_acc_no;
    addTeacherLUsername.value = teachersArr[index].dets.system.username;
    addTeacherLPassword.value = teachersArr[index].dets.system.password;
    addTeacherRoll.value = teachersArr[index].dets.system.role;
    addTeacherEmpType.value = teachersArr[index].dets.proffession.emp_type;
    addTeacherEmpCategory.value = teachersArr[index].dets.proffession.emp_category;
    addTeacherGeneratedTeacherId.innerText = teachersArr[index].dets.tId;

    let ableSB = teachersArr[index].dets.proffession.able_subjs
    let asidnedSB = teachersArr[index].dets.proffession.asigned_subjs
    for (let i=0; i<addTeacherAbleSbjctCheck.length; i++) {
        if (teachersArr[index].dets.proffession.able_subjs.includes(addTeacherAbleSbjctCheck[i].value)) {
            addTeacherAbleSbjctCheck[i].checked = true;
        }
    }
    for (let i=0; i<addTeacherAsignedSbjctCheck.length; i++) {
        if (teachersArr[index].dets.proffession.asigned_subjs.includes(addTeacherAsignedSbjctCheck[i].value)) {
            addTeacherAsignedSbjctCheck[i].checked = true;
        }
    }
    openAddTeacherPopFunc();
}

//createNewTeachersDBFunc
async function editTeacherDataFunc(id,i) {
    teachersCYear = teachersNavSelectYear.value;
    let ableSubjects = [];
    let asignedSubjects = [];
    addTeacherAbleSbjctCheck.forEach(subj => {
        if (subj.checked == true) {
            ableSubjects.push(subj.value);
        }
    })
    addTeacherAsignedSbjctCheck.forEach(subj => {
        if (subj.checked == true) {
            asignedSubjects.push(subj.value);
        }
    })

    let updates = {
        dets: {
            tId:addTeacherGeneratedTeacherId.innerText,
            fname:addTeacherFname.value,
            lname:addTeacherLname.value,
            gender:addTeacherSelectedGender.value,
            dob:addTeacherDob.value,
            nationality:addTeacherNationality.value,
            district:addTeacherDistrict.value,
            s_count:addTeacherSCounty.value,
            phone:addTeacherNumer.value,
            email:addTeacherEmail.value,
            nin_pn:addTeacherNIN.value,
            photo:teacherImg_seletc_Flag,
            proffession: {
                yrs_exp:addTeacherYearsExp.value,
                mons_exp:addTeacherMonsExp.value,
                former_sch:addTeacherFormerSch.value,
                qfn:addTeacherQfn.value,
                qfn_desc:addTeacherQfnDesc.value,
                able_subjs:ableSubjects,
                asigned_subjs:asignedSubjects,
                emp_date:addTeacherEmpDate.value,
                emp_mon:teachersArr[i].emp_mon,
                emp_day:teachersArr[i].emp_day,
                emp_type:addTeacherEmpType.value,
                emp_category:addTeacherEmpCategory.value,
                tcategory:""
            },
            payrole_info:{
                salary:addTeacherSalary.value,
                allc:addTeacherAlc.value,
                bank_name:addTeacherBankName.value,
                bank_acc_no:addTeacherBankAccNo.value
            },
            system:{
                username:addTeacherLUsername.value,
                password:addTeacherLPassword.value,
                role:addTeacherRoll.value
            },
            health:{
                condition:addTeacherHCondition.value,
                dr_name:addTeacherHDrName.value,
                dr_phone:addTeacherHDrContact.value
            }
        }
    }

    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/updateadminstd/teachers/teachers_${teachersCYear}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'Application/json',
            },
            body: JSON.stringify(updates)
        });
        const rslt = await res.json();
        loader.style.display = '';
        console.log("EDITING TEACHERS :: ",rslt)
        getTeachersDataFunc();
    } catch (err) {
        console.error(`Ooh: _EditingeachersData_${err.name}_${err.message}`);
    }
}

function deleteTeacherDataBtn(index) {
    deleteTeacher_index = index; 
    msgBox_flag = 'delete_teacher';
    
    msgIdentifierTitle.innerHTML = `Delete Teacher's Records`
    msgIdentifierIcon.src = 'assets/icons/deleteWarning.png'
    msgIdentifierText.innerHTML = `
        Are sure to delete the Records for<br><b>${teachersArr[index].dets.fname}</b>
        `;
    warning_msg_pops.style.display = 'flex';
}
async function deleteTeacherDataFunc(index) {
    let id = teachersArr[index]._id
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/deleteadminstd/teachers/teachers_${teachersCYear}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        const rslt = await res.json();
        loader.style.display = '';
        console.log(" :: Deleting :: ",teachersArr[index]);
        console.log("After Deleting teacher :: ",rslt);
        getTeachersDataFunc();
    } catch (err) {
        console.error(`Ohh: _DeletingTeacher :: ${err.name}_${err.message}`);
    }
}

//-----------------------| DashBoard
let Dashboard = document.getElementById('Dashboard');
Dashboard.addEventListener('click', () => {
    cardDisplayed = 'dashboard'
    RenderCards()
    countAllStudents();
    countAllTeachers();
    
})

function RenderCards() {
    switch (cardDisplayed) {
        case `db_settings_card` :
            all_cards.forEach((card) => {
                card.style.display = 'none'
            })
            settings_card.style.display = 'block';
            break;
        case `communication_events_card` :
            all_cards.forEach((card) => {
                card.style.display = 'none'
            })
            communication_card.style.display = 'block';
            break;
        case `manageStd_card` :
            all_cards.forEach((card) => {
                card.style.display = 'none'
            })
            students_card.style.display = 'block';
            break;
        case `manageStdFees_card` :
            all_cards.forEach((card) => {
                card.style.display = 'none'
            })
            fees_card.style.display = 'block';
            break;
        case `students_marks_card` :
            all_cards.forEach((card) => {
                card.style.display = 'none'
            })
            marks_card.style.display = 'block';
            break;
        case `students_grades_card` :
            all_cards.forEach((card) => {
                card.style.display = 'none'
            })
            grades_card.style.display = 'block';
            break;
        case `teacher_management` :
            all_cards.forEach((card) => {
                card.style.display = 'none'
            })
            teachers_card.style.display = 'block';
            break;
        case `dashboard` :
            all_cards.forEach((card) => {
                card.style.display = 'none'
            })
            dashboard_card.style.display = 'block';
            break;
        }
}

// COmmunication 

function openCreateEventBtn() {
    saveEventFlag = 1;
    openCreateEventFunc()
}

/*####-----------------------------####| MANAGING DATABSES |####-----------------------------####*/
/*-----------------------------| Students DATABSES |-----------------------------*/

//.......ADMIN STUDENT DETAILS
let dbname = `databases`;
let cname = `admin_dbs`
let detsDBArr = [];
let teachersDetsDBArr = [];
let marksDBArr = [];
let feesDBArr = [];
// let teachersDetsDBArr = [];

function createNewAdminDetailsDBBtn() {
    createNewAdminDetailsDBFunc();
}
function createNewTeachersDBBtn() {
    createNewTeachersDBFunc();
}
function createNewAdminMarksDBBtn() {
    createNewAdminMarksDBFunc();
}

function openCreateDatabaseBtn() {
    openCreateDatabasePopFunc();
    readAdminStdsDetsDBs();
    readAdminStdsMarksDBs();  
    readAdminStdsFeesDBs();  
    readTeachersDBs()
}


async function readAdminStdsDetsDBs () {
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/getalladminstds/databases/admin_dbs`);
        const dbs = await res.json();   
         detsDBArr = await dbs;
         loader.style.display = '';
        renderDetsDBs();
        displayAvailableAdminDetsDbs(); 
    } catch (err) {
        console.error(`Ooh.._GET_AdminStdsDets :: ${err.name}_${err.message}`);
    }
}
async function readAdminStdsMarksDBs () {
    try {
        loader.style.display = 'flex';
        marksDBArr = [];
        const res = await fetch(`${url}/getalladminstds/databases/marks_dbs`);
        const dbs = await res.json();
        marksDBArr = await dbs;
        loader.style.display = '';
        renderMarksDBs();
    } catch (err) {
        console.error(`Ooh.._GET_AdminStdMarks :: ${err.name}_${err.message}`)
    }
}
async function readAdminStdsFeesDBs () {
    try {
        loader.style.display = 'flex';
        feesDBArr = [];
        const res = await fetch(`${url}/getalladminstds/databases/fees_dbs`);
        const dbs = await res.json();
        feesDBArr = await dbs;
        loader.style.display = '';
        renderDetsDBs()
        console.log("ADMIN FEES DBS: ",feesDBArr)
    } catch (err) {
        console.error(`Ooh.._GET_AdminStdFeesDBS :: ${err.name}_${err.message}`)
    }
}
async function readTeachersDBs () {
    try {
        loader.style.display = 'flex';
        teachersDetsDBArr = [];
        const res = await fetch(`${url}/getalladminstds/databases/teachers_dbs`);
        const dbs = await res.json();
        teachersDetsDBArr = await dbs;
        loader.style.display = '';
        renderTeachersDetsDBs()
        displayAvailableTeachersDetsDbs()
        console.log("Reading TEACHERS DBS: ",teachersDetsDBArr)
    } catch (err) {
        console.error(`Ooh.._GET_TeachersDBS :: ${err.name}_${err.message}`)
    }
}


//Teachers Dbs
//creating
teachersNavSelectYearDBDets.addEventListener("mouseover", () => {
    teachersNavSelectYearDBDets.style.background = "blue"
    teachersNavSelectYearDBDets.style.color = "white"
})
async function createNewTeachersDBFunc() {
    let Cyear = Number(teachersNavSelectYearDBDets.value);

    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/getalladminstds/teachers/teachers_${(Cyear - 1)}`);
        const rslt = await res.json();

        const res2 = await fetch(`${url}/pasteteachersdets/teachers/teachers_${Cyear}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(rslt)
        })
        const rslt2 = await res2.json();
        loader.style.display = '';
        detailsOfDbs('databases','teachers_dbs',`teachers_${Cyear}`,'null','null');
        readTeachersDBs();
    } catch (err) {
        console.error(`Ooh:: CreatingTeachersDbs :: ${err.name}_${err.message}`);
    }
}

//Displaying available teachers dbs
function displayAvailableTeachersDetsDbs() {
    let detsDBOptns = '';
    let detsDBSortedArr = [];
    let td = ''
    console.log("Displayiing availbale teachers DBS:")
    console.log(teachersDetsDBArr)
    teachersDetsDBArr.forEach((db,i) => {
        let dbName = db.DBname
        detsDBSortedArr.push(Number(dbName.slice(9,dbName.length)));
    })
    detsDBSortedArr.sort((a,b) => b - a);
    detsDBSortedArr.forEach((db,i) => {
        detsDBOptns += `
        <option value="${db}">${db}</option>
        `
    })
    teachersNavSelectYear.innerHTML = detsDBOptns;
}
// renderDetsDBs
function renderTeachersDetsDBs() {
    let detsDBOptns = '';
    let detsDBSortedArr = [];
    let td = ''
    teachersDetsDBArr.forEach((db,i) => {
        let dbName = db.DBname
        detsDBSortedArr.push(Number(dbName.slice(6,dbName.length)));
        td += `
        <tr> 
        <td>${i+1}</td>
        <td>${dbName}</td>
        <td>
            <button onclick="deleteTeachersDBBtn(${i})">Delete</button>
        </td>
        </tr>
        `
    })
    detsDBSortedArr.sort((a,b) => b - a);
    detsDBSortedArr.forEach((db,i) => {
        detsDBOptns += `
        <option value="${db}">${db}</option>
        `
    });
    teachersNavSelectYear.innerHTML = detsDBOptns;
    teachersDetstbdy.innerHTML = td; 
}

async function deleteTeachersDBBtn(index) {
    let CName = teachersDetsDBArr[index].DBname
    let ID = teachersDetsDBArr[index]._id;

    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/dropclass/teachers/${CName}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        const rslt = await res.json();
        loader.style.display = '';
        deleteTeachersDBDetsBtn(CName,ID);
        readTeachersDBs()
    } catch (err) {
        console.error(`Ooh: DELETE_DeletingTeachersCollection :: ${err.name}_${err.message}`);
    }
}
async function deleteTeachersDBDetsBtn(dbname,id) {
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/deleteadminstd/databases/teachers_dbs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json'
            }
        })
        const rlst = await res.json();
        let r = await rslt;
        loader.style.display = '';
        return r;
    } catch (err) {
        console.error(`Ooh..Deleting details of ${dbname} Database`);
    }
}

// readAdminStdsDetsDBs
//Creating the .. Admin DB .. with 6 empyty Collections
async function createNewAdminDetailsDBFunc() {
    let dbName = createAdminDatabaseYear.value;
    let copydb = copyAdminStdsDetsFrom.value;
    let nclasses = 6;
    let r1;
    let r2;

    let feesBody = {
        type:"fees",
        year:dbName,
        form_1:{principle:0},
        form_2:{principle:0},
        form_3:{principle:0},
        form_4:{principle:0},
        form_5:{principle:0},
        form_6:{principle:0},
    }
    try {
        console.log(`DBName: ${dbName} NClasses: ${nclasses}`);
        const res = await fetch(`${url}/createemptyc6class/admin_${dbName}/form/${nclasses}`);
        const rslt = await res.json();
        const res2 = await fetch(`${url}/createfees/settings/fees_data`, {
            method:'POST',
            headers:{
                'Content-Type':'Application/json'
            },
            body: JSON.stringify(feesBody)
        })

        let n = 1;
        while (n < 6) {
            r1 = await coppyAdminStdDets(n,copydb);
            r2 = await pasteAdminStdDets(n,dbName);
            n++;
        }

        detailsOfDbs('databases','admin_dbs',`admin_${dbName}`,'null','null');
        readAdminStdsDetsDBs();
        
    } catch (err) {
        console.error(`Oops_CraetingAdminSTdDetsDB_WithData:: ${err.name}_${err.message}`);
    }
    
}
//Getting adminDets 
async function getAdminDets(db,cn) {
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/admindets/${db}/${cn}`);
        const rslt = await res.json();
        loader.style.display = '';
        insertadminDetsIntoSTdMarks(db,cn);
    } catch (err) {
        console.error(`Ooh_GET_Getting_adminDetsFunc :: ${err.name}_${err.message}`);
    }
}
//Copying admin dets from admin_2025 and pasting into admin_.... 
async function coppyAdminStdDets(classNo,dbyear) {
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/copyclass/admin_${dbyear}/form_${classNo}`);
        const rslt = await res.json();
        let data = await rslt;
        loader.style.display = '';
        return data;
    } catch (err) {
        console.error("Oop_Client_Copping_AdminStdDets:",`${err.name}_${err.message}`)
    }
}
async function pasteAdminStdDets (classNo,dbyear) {
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/pasteclass/admin_${dbyear}/form_${classNo + 1}`,{
            method: 'POST',
            headers: {
                'Content-Type':'Application/json'
            }
        })
        const rslt = await res.json();
        let data = await rslt;
        loader.style.display = '';
        return data;
    } catch (err) {
        console.error("Oop_Client_Copping_AdminStdDets:",`${err.name}_${err.message}`);
    }
}
//Deleting adminDatabases...
async function deleteAdminDBBtn(index) {
    let dbname = `${detsDBArr[index].DBname}`
    let ID = `${detsDBArr[index]._id}`;
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/dropdatabase/${dbname}`);
        const rslt = await res.json();
        const rslt2 = await deleteDetsAdminDBBtn(dbname,ID);
        loader.style.display = '';
        deleteFeesData(dbname.slice(6,dbname.length))
        readAdminStdsDetsDBs();
    } catch (err) {
        console.error(`Ooh..Deleting ${dbname} Database`);
    }
}
async function deleteDetsAdminDBBtn(dbname,id) {
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/deleteadminstd/databases/admin_dbs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json'
            }
        })
        const rlst = await res.json();
        let r = await rslt;
        loader.style.display = '';
        return r;
    } catch (err) {
        console.error(`Ooh..Deleting details of ${dbname} Database`);
    }
}

//Deleting Fees Data for the AdminStd Year that have been Deleteed
async function deleteFeesData(feesDataYear) {
    let feesDataCname = 'fees_data';
    try {
        const res = await fetch(`${url}/deleteschsettings/settings/${feesDataCname}/${feesDataYear}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json'
            }
        })
    } catch (err) {
        console.error(`Ooh_DELETE_DeletingFessData :: ${err.name}_${err.message}`)
    }
}

//############| Marks |#############
//display Available Admin Details Databases/Years in Setting/ adding marks databases
function displayAvailableAdminDetsDbs() {
    let detsDBOptns = '';
    let detsDBSortedArr = [];
    let td = ''
    detsDBArr.forEach((db,i) => {
        let dbName = db.DBname
        detsDBSortedArr.push(Number(dbName.slice(6,dbName.length)));
    })
    detsDBSortedArr.sort((a,b) => b - a);
    detsDBSortedArr.forEach((db,i) => {
        detsDBOptns += `
        <option value="${db}">${db}</option>
        `
    })
    selectAvalableAdminDetsDbs.innerHTML = detsDBOptns
}
async function createNewAdminMarksDBFunc(/*db*/) {
    let dbname = `marks_${selectAvalableAdminDetsDbs.value}`;
    let dbYear = `${selectAvalableAdminDetsDbs.value}`;
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/createdbc6class/${dbname}/form`);
        const rslt = await res.json();
        loader.style.display = '';
        detailsOfDbs('databases','marks_dbs',dbname,generateMarksDbTerm.value,generateMarksDbExam.value)
        coppyAdminDets(dbYear);
        readAdminStdsMarksDBs();
    } catch (err) {
        console.error(`Ooh_GET_CraetingAdminSTdMarksDB_WithData:: ${err.name}_${err.message}`);
    }
}
//Coppying Admin Dets of Students like names to be inserted in the created database and classes.
async function coppyAdminDets(databaseYear) {
    let dbname = `admin_${databaseYear}`;
    let cname = `form_`;
    let n = 1;
    try {
        loader.style.display = 'flex';
        while (n <= 6) {
            const res = await fetch(`${url}/admindets/${dbname}/${cname}${n}`);
            const data = await res.json();
            insertadminDetsIntoSTdMarks(`marks_${databaseYear}`,`${cname}${n}`);
            n++;
        }
        loader.style.display = '';
    } catch (err) {
        console.error(`Ooh..._GET_CopyingAdminDets :: ${err.name}_${err.message}`);
    }
}
//Inserting adminDets into Students Marks
async function insertadminDetsIntoSTdMarks(dbName,cName) {
    let term = Number(generateMarksDbTerm.value);
    let exam = generateMarksDbExam.value;
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/addstats/${dbName}/${cName}/${term}/${exam}`);
        const rslt = await res.json();
        let data = await rslt;
        loader.style.display = '';
    } catch (err) {
        console.error(`Ooh_GET_InsertingAdminDetsInto_StudentMarks :: ${err.name}_${err.message}`);
    }
}


async function deleteAdminMarksDBBtn(index) {
    console.log(marksDBArr[index]._id);
    let dbname = `${marksDBArr[index].DBname}`
    let ID = `${marksDBArr[index]._id}`

    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/dropdatabase/${dbname}`);
        const rslt = await res.json();
        const rslt2 = await deleteDetsAdminMarksDBBtn(dbname,ID);
        loader.style.display = '';
        readAdminStdsMarksDBs();
    } catch (err) {
        console.error(`Ooh..Deleting ${dbname} Database`);
    }
}

async function deleteDetsAdminMarksDBBtn(dbname,id) {

    try {
        loader.style.display = '';
        const res = await fetch(`${url}/deleteadminstd/databases/marks_dbs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json'
            }
        })
        const rlst = await res.json();
        let r = await rslt;
        loader.style.display = '';
        return r;
    } catch (err) {
        console.error(`Ooh..Deleting details of ${dbname} Database`);
    }
}

//Deleting Fees Databases...
async function deleteAdminFeesDBBtn(index) {
    console.log(feesDBArr[index]._id);
    let dbname = `${feesDBArr[index].DBname}`
    let ID = `${feesDBArr[index]._id}`
    console.log("Fees id = "+ID)

    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/dropdatabase/${dbname}`);
        const rslt = await res.json();
        const rslt2 = await deleteDetsAdminFeesDBBtn(dbname,ID);
        loader.style.display = '';
        readAdminStdsFeesDBs();
    } catch (err) {
        console.error(`Ooh..Deleting ${dbname} Database`);
    }
}
async function deleteDetsAdminFeesDBBtn(dbname,id) {

    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/deleteadminstd/databases/fees_dbs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/json'
            }
        })
        const rlst = await res.json();
        let r = await rslt;
        loader.style.display = '';
        return r;
    } catch (err) {
        console.error(`Ooh..Deleting details of ${dbname} Database`);
    }
}

//Details About dataBases functions
async function detailsOfDbs(dbname,cname,DB,Term,Exam) {
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/addadminstd/${dbname}/${cname}`, {
            method: 'POST',
            headers: {
                'Content-Type':'Application/json'
            },
            body: JSON.stringify({
                DBname:DB,
                dets: {
                    term: Term,
                    exam: Exam
                }
            })
        })
        const rslt = await res.json();
        loader.style.display = '';
    } catch (err) {
        console.error(`Erro Creating details of ..[ ${dbname} ].. Database`);
    }
}

//Realoading the Databases
function reloadDataBases() {
    console.log('Reloading databases...')
    readAdminStdsDetsDBs();
    readAdminStdsMarksDBs();
    readTeachersDBs();
    // readAdminStdsFeesDBs();
    console.log('Done Reloading databases.')
}

window.addEventListener('load', () => {
    // cardDisplayed = 'dashboard'
    readAdminStdsDetsDBs();
    readAdminStdsMarksDBs();
    readTeachersDBs()
    getSchData('sch_data','')
    countAllStudents();
    countAllTeachers()
    // readAdminStdsFeesDBs();
})


// ---------------------------------| Settings Panael |---------------------------------//

//>>>>>>>>>>Managing DatabAses View/Dsplay Behavior

let studentsDbsCard = document.querySelector('#body_frame_2');
let marksDbsCard = document.querySelector('#body_frame_3');
let teachersDbsCard = document.querySelector('#body_frame_4');
let db_btns = document.querySelectorAll('.db_btn');

function manageTeachersDBsBtn(e) {
    db_btns.forEach(db_btn => {
        db_btn.style.background = ''
        db_btn.style.borderBottomColor = ''
        db_btn.style.color = ""
    });
    e.target.style.borderBottomColor = 'aqua'
    e.target.style.background = "navy"
    e.target.style.color = "whitesmoke"
    studentsDbsCard.style.display = 'none';
    marksDbsCard.style.display = 'none';
    teachersDbsCard.style.display = 'block';
}
function manageStudentsDBsBtn(e) {
    db_btns.forEach(db_btn => {
        db_btn.style.background = ''
        db_btn.style.borderBottomColor = ''
        db_btn.style.color = ""
    });
    e.target.style.borderBottomColor = 'aqua'
    e.target.style.background = "navy"
    e.target.style.color = "whitesmoke"
    studentsDbsCard.style.display = 'block';
    marksDbsCard.style.display = 'none';
    teachersDbsCard.style.display = 'none';   
}
function manageMarksDBsBtn(e) {
    db_btns.forEach(db_btn => {
        db_btn.style.background = ''
        db_btn.style.borderBottomColor = ''
        db_btn.style.color = ""
    });
    e.target.style.borderBottomColor = 'aqua'
    e.target.style.background = "navy"
    e.target.style.color = "whitesmoke"
    studentsDbsCard.style.display = 'none';
    marksDbsCard.style.display = 'block';
    teachersDbsCard.style.display = 'none';
}

//>>>>>>>>>>Managing Changes and PopUps

let settings_pop_ups_box = document.querySelector('.settings_pop_ups_box');
let settings_pops = document.querySelectorAll('.settings_pops');
let pop_up_1 = document.querySelector('.pop_up_1');
let pop_up_2 = document.querySelector('.pop_up_2');
let pop_up_3 = document.querySelector('.pop_up_3');
let pop_up_4 = document.querySelector('.pop_up_4');

let feesForSenior_1 = document.getElementById('feesForSenior_1');
let feesForSenior_2 = document.getElementById('feesForSenior_2');
let feesForSenior_3 = document.getElementById('feesForSenior_3');
let feesForSenior_4 = document.getElementById('feesForSenior_4');
let feesForSenior_5 = document.getElementById('feesForSenior_5');
let feesForSenior_6 = document.getElementById('feesForSenior_6');


function closesettings_pop_ups_box() {
    settings_pops.forEach(settings_pop => {
        settings_pop.style.display = '';
    })
    settings_pop_ups_box.style.display = '';
}
function changeSchoolNameBtn() {
    settings_pops.forEach(settings_pop => {
        settings_pop.style.display = '';
    })
    settings_pop_ups_box.style.display = 'block';
    pop_up_1.style.display = 'flex'
    getSchData('sch_data','sch_name')
}
function changeSchoolMotorBtn() {
    settings_pops.forEach(settings_pop => {
        settings_pop.style.display = '';
    })
    settings_pop_ups_box.style.display = 'block';
    pop_up_3.style.display = 'flex'
    getSchData('sch_data','sch_motor')
    
}
function changeSchoolBadgeBtn() {
    settings_pops.forEach(settings_pop => {
        settings_pop.style.display = '';
    })
    settings_pop_ups_box.style.display = 'block';
    pop_up_2.style.display = 'flex'
    getSchData('sch_data','sch_badge')
    
}

function changeSchoolFeesBtn() {
    changeSchoolFeesFunc();
    settings_pops.forEach(settings_pop => {
        settings_pop.style.display = '';
    })
    settings_pop_ups_box.style.display = 'block';
    pop_up_4.style.display = 'flex'
    
}

//Changing Fees 
let fees_data_Year = new Date().getFullYear();
function changeFeesSaveBtn() {
    changeFeesSaveFunc()
}
copyAdminStdsDetsFromForFees.addEventListener('change', () => {
    fees_data_Year = copyAdminStdsDetsFromForFees.value;
    changeSchoolFeesFunc();
})
async function changeSchoolFeesFunc() {
    fees_data_Year = copyAdminStdsDetsFromForFees.value;

    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/getfees/settings/fees_data/${fees_data_Year}`);
        const data = await res.json();
        feesForSenior_1.value = await data[0].form_1.principle;
        feesForSenior_2.value = await data[0].form_2.principle;
        feesForSenior_3.value = await data[0].form_3.principle;
        feesForSenior_4.value = await data[0].form_4.principle;
        feesForSenior_5.value = await data[0].form_5.principle;
        feesForSenior_6.value = await data[0].form_6.principle;
        loader.style.display = '';
    } catch (err) {
        console.error(`Ooh_AccessingFeesData :: ${err.name}_${err.message}`)
    }
}

async function changeFeesSaveFunc() {
    fees_data_Year = copyAdminStdsDetsFromForFees.value;
    feesBody = {
        type:"fees",
        year:fees_data_Year,
        form_1:{principle:Number(feesForSenior_1.value)},
        form_2:{principle:Number(feesForSenior_2.value)},
        form_3:{principle:Number(feesForSenior_3.value)},
        form_4:{principle:Number(feesForSenior_4.value)},
        form_5:{principle:Number(feesForSenior_5.value)},
        form_6:{principle:Number(feesForSenior_6.value)}
    }

    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/updatefees/settings/fees_data/${fees_data_Year}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'Application/json'
            },
            body: JSON.stringify(feesBody)
        });
        const rslt = await res.json();
        loader.style.display = '';
        closesettings_pop_ups_box();
    } catch (err) {
        console.error(`Ooh_POST_SavingFeesChange :: ${err.name}_${err.message}`)
    }
}

let sch_name_input = document.getElementById('sch_name_input');
let sch_motor_input = document.getElementById('sch_motor_input');
let sch_badge_input = document.getElementById('sch_badge_input');

let sch_badge_pic = document.getElementById('sch_badge_pic');
let save_badge_uri_btn = document.getElementById('save_badge_uri_btn');
let badge_warning_txt = document.querySelector('.badge_warning_txt');

let sideBarSchoolName = document.getElementById('sideBarSchoolName');
let sideBarSchBadge = document.getElementById('sideBarSchBadge');
let sch_badge_settings_pic = document.getElementById('sch_badge_settings_pic');

let current_sch_name = document.querySelector('.current_sch_name');
let current_sch_motor = document.querySelector('.current_sch_motor');

let sch_badge_uri = '';
sch_badge_input.addEventListener('change', () => {
    let reader = new FileReader();
    let file = sch_badge_input.files[0];
    reader.onload = (e) => {
        sch_badge_uri = e.target.result
        sch_badge_pic.src = sch_badge_uri;
    }
    reader.readAsDataURL(file);
    save_badge_uri_btn.removeAttribute('disabled');
        badge_warning_txt.style.display = 'none'
});



let schDataArr = [];
async function getSchData(cname,sets) {
    try {
        loader.style.display = 'flex'
        const res = await fetch(`${url}/getschsettings/settings/${cname}`);
        const rslt = await res.json();
        const data = await rslt;
        loader.style.display = ''
        schDataArr = await data;
        switch (sets) {
            case 'sch_name':
                displaySchName();
                break;
            case 'sch_motor':
                displaySchMotor();
                break;
            case 'sch_badge':
                displaySchBadge();
                break;
            default:
                displayAllSchdata();
                break;
            }
    } catch (err) {
        console.error(`Ooh :: GET_Getting_All_Settings : ${err.name}_${err.message}`)
    }
}
function displaySchName() {
    sch_name_input.value = schDataArr[0].school_name; 
}
function displaySchMotor() {
    sch_motor_input.value = schDataArr[0].school_motor; 
}
function displaySchBadge() {
    sideBarSchBadge.src = schDataArr[0].school_badge;
    sch_badge_pic.src = schDataArr[0].school_badge;
    sch_badge_settings_pic.src = schDataArr[0].school_badge;
}
function displayAllSchdata() {
    sideBarSchoolName.innerHTML = schDataArr[0].school_name
    current_sch_name.innerHTML = schDataArr[0].school_name
    current_sch_motor.innerHTML = schDataArr[0].school_motor
    sideBarSchBadge.src = schDataArr[0].school_badge;
    sch_badge_pic.src = schDataArr[0].school_badge;
    sch_badge_settings_pic.src = schDataArr[0].school_badge;


}
// let updateSchSettingFlag = '';

async function saveSettingsFuncBtn(e) {
    try {
        loader.style.display = 'flex'
        const dat = await getSchData('sch_data','');
        const a = await updateSchSettings(e);
        loader.style.display = ''
    } catch (err) {
        console.error(`Ohoh :: saveSetiingsFuncBtn :: ${err.name}_${err.message}`);
    }
}
async function updateSchSettings(updateSchSettingFlag) {
    let cname = 'sch_data';
    let schSettings_Id = schDataArr[0]._id;
    let updates = {};
    try {
        loader.style.display = 'flex'
        switch (updateSchSettingFlag) {
            case 'sch_name':
                updates = {
                    school_name: sch_name_input.value,
                }
                break;
            case 'sch_motor':
                updates = {
                        school_motor: sch_motor_input.value,
                    }
                    break;
            case 'sch_badge':
                    updates = {
                        school_badge: sch_badge_uri,
                    }
                    break;
                }
        const res = await fetch(`${url}/updateschsetings/settings/${cname}/${schSettings_Id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(updates)
        });
        loader.style.display = ''
        closesettings_pop_ups_box();
        getSchData('sch_data','')
    } catch (err) {
        console.error(`Ooh :: UPDATE_SchSettings :: ${err.name}_${err.message}`);
    }
}
//Changing School Name 
function changeSchoolNameSaveBtn() {
    changeSchoolNameSaveFunc();
}

async function changeSchoolNameSaveFunc() {
    // fees_data_Year = copyAdminStdsDetsFromForFees.value;
    let cname = 'sch_data'
    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/getschsettings/settings/${cname}`);
        const data = await res.json();
        feesForSenior_1.value = await data[0].form_1.principle;
        feesForSenior_2.value = await data[0].form_2.principle;
        feesForSenior_3.value = await data[0].form_3.principle;
        feesForSenior_4.value = await data[0].form_4.principle;
        feesForSenior_5.value = await data[0].form_5.principle;
        feesForSenior_6.value = await data[0].form_6.principle;
        loader.style.display = '';
    } catch (err) {
        console.error(`Ooh_AccessingFeesData :: ${err.name}_${err.message}`)
    }
}

async function changeFeesSaveFunc() {
    fees_data_Year = copyAdminStdsDetsFromForFees.value;
    feesBody = {
        type:"fees",
        year:fees_data_Year,
        form_1:{principle:Number(feesForSenior_1.value)},
        form_2:{principle:Number(feesForSenior_2.value)},
        form_3:{principle:Number(feesForSenior_3.value)},
        form_4:{principle:Number(feesForSenior_4.value)},
        form_5:{principle:Number(feesForSenior_5.value)},
        form_6:{principle:Number(feesForSenior_6.value)}
    }

    try {
        loader.style.display = 'flex';
        const res = await fetch(`${url}/updatefees/settings/fees_data/${fees_data_Year}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'Application/json'
            },
            body: JSON.stringify(feesBody)
        });
        const rslt = await res.json();
        loader.style.display = '';
        closesettings_pop_ups_box();
    } catch (err) {
        console.error(`Ooh_POST_SavingFeesChange :: ${err.name}_${err.message}`)
    }
}

/*
>>>>>>>>>>>>>> ALL SEARCHING <<<<<<<<<<<<<<<<<
*/

let searchForAdminStd = document.getElementById('searchForAdminStd')
let searchForTeacher = document.getElementById('searchForTeacher')
let searchForAdminStdFess = document.getElementById('searchForAdminStdFess')
let searchForAdminStdMarks = document.getElementById('searchForAdminStdMarks')

function SearchNow(event,tbodyForSearch) {
    let search = event.value
    let rows = tbodyForSearch.children;
    for (let i=0; i<rows.length; i++) {
        let row = rows[i];
        let cells = row.cells;
        let found = false;
        for (let j=0; j<cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(search.toLowerCase())) {
                cells[j].style.color = ''
                found = true;
            } else {
                
                cells[j].style.color = 'aqua'
            }
        }
        !(found) ? row.style.display = 'none' : row.style.display = ''
    }
    
}
//STUDENT SEARCHING
searchForAdminStd.addEventListener('input', (e) => {
    SearchNow(e.target,adminStdTableBdy)
})      
searchForAdminStdFess.addEventListener('input', (e) => {
    SearchNow(e.target,adminStdFeesTableBdy)
})      
searchForAdminStdMarks.addEventListener('input', (e) => {
    SearchNow(e.target,adminStdMarksTbdy)
})      

//TEACHER SEARCHING
searchForTeacher.addEventListener('input', (e) => {
    SearchNow(e.target,teachersDataTbdy)
})


// >>>>>>>>>> LOGIN FUNCTIONALITY

function logiInTeacherBtn() {
    logiInTeacherFunc()
}

let teacher_login_user_name = document.getElementById('teacher_login_user_name')
let teacher_login_user_id = document.getElementById('teacher_login_user_id')

let login_window = document.querySelector('.login_window')
let main = document.querySelector('main')
let error_for_username = document.querySelector('.error_for_username')
let error_for_userid = document.querySelector('.error_for_userid')

let loggeIn_user_img = document.querySelectorAll('#loggeIn_user_img')
let loggeIn_user_name = document.querySelectorAll('#loggeIn_user_name')
let dash_user_img = document.querySelector('.dash_user_img')
let login_card = document.querySelector('.login_card')

teacher_login_user_name.addEventListener('keypress', (e) => {
    error_for_username.style.display ='none'
    console.log(e)
    if (e.key == 'Enter') {
            teacher_login_user_id.focus()
        }
    })
    teacher_login_user_id.addEventListener('keypress', (e) => {
    error_for_username.style.display ='none'
        if (e.key == 'Enter') {
            logiInTeacherFunc()
        }
})


let loggedInUserInfo = [];
async function logiInTeacherFunc() {
    let username = teacher_login_user_name.value;
    let userId = teacher_login_user_id.value;
    let dbname = 'teachers';
    let cname = `teachers_${new Date().getFullYear()}`;
    console.log('Username: '+username)
    console.log('UserID: '+userId)

    try {
        const res = await fetch(`${url}/techercheck/${dbname}/${cname}/${username}/${userId}`)
        const data = await res.json();
        loggedInUserInfo = await data;
        if (loggedInUserInfo.length >= 1) {
            if ((loggedInUserInfo[0].dets.system.role == "admin") || (loggedInUserInfo[0].dets.system.role == "bursar")) { 
                setTimeout(() => {
                login_card.style.transform = 'skewX(10deg)'
                login_card.style.transform = 'skewY(-10deg)';
            },0)
            setTimeout(() => {
                login_card.style.height = '1vh'

            },100)
            setTimeout(() => {

                console.log('Ther logged in user is :: ',loggedInUserInfo)
                // alert('Hello ADMIN. '+loggedInUserInfo[0].dets.fname + ' '+loggedInUserInfo[0].dets.lname)
                loggeIn_user_img.forEach(user => {
                    user.src = loggedInUserInfo[0].dets.photo
                })
                loggeIn_user_name.forEach(user => {
                    user.innerHTML = `${loggedInUserInfo[0].dets.fname} ${loggedInUserInfo[0].dets.lname}`
                })
                login_window.style.display = 'none'
                main.style.display = 'block'
            },400)
            } else {
                alert('Yure not an Admin or a Bursar ure a:  '+loggedInUserInfo[0].dets.system.role)
            }

        } else {
            error_for_username.innerHTML = "Oops Credential didnot match any Result."
            console.log('Oops Credential didnot match any Result.')
            error_for_username.innerHTML = "Oops Credential didnot match any Result."
            error_for_username.style.display = 'block'
        }
    } catch (err) {
        console.error(`Ooh :: GET_Getting_Datat_forVerification :: ${err.name}_${err.message}`);
    }
    setTimeout(() => {
        countAllStudents();
        countAllTeachers();
    },500)
}

function teacherLogOutBtn() {
    let optn = confirm("Are sure you want to Log out")
    if (optn == true) {
        window.location.reload();
    }
}

function logGotToHomeBtn() {
    window.location.href = 'index.html'
}

let view_password_icon = document.getElementById('view_password_icon');
view_password_icon.addEventListener('click', () => {
    if (teacher_login_user_id.type == 'password') {
        teacher_login_user_id.type = 'text';
        view_password_icon.src = 'assets/icons/view_open.png';
    } else {
        teacher_login_user_id.type = 'password';
        view_password_icon.src = 'assets/icons/view_lock.png';
    }
})

let load_animation = document.querySelector('.load')
function animateLoader() {
        load_animation.style.transform = "rotate(360deg)"
}



