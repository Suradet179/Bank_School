import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/components/api/student/student.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css'],
})
export class ListTeachersComponent implements OnInit {
  slowFiller = false; //สงสัยด
  //ตัวแปรรับค่าจากapi
  dataTeacher: any = [];

  // //สร้างตัวแปรแสดงรายละเอียดข้อมูลนักเรียน
  teacherDetail = {
    tid: '',
    prefix: '',
    fname: '',
    lname: '',
    primary: '',
    email: '',
    password: '',
  };

  // //สร้างตัวแปรเพิ่มข้อมูลครู
  teacherAdd = {
    tid: '',
    prefix: '',
    fname: '',
    lname: '',
    primary: '',
    email: '',
    password: '',
  };

  // //สร้างตัวแปรแก้ไขข้อมูลครู
  teacherEdit = {
    tid: '',
    prefix: '',
    fname: '',
    lname: '',
    primary: '',
    email: '',
    password: '',
  };

  constructor(public api: StudentService) {}

  ngOnInit(): void {
    this.fetchTeacher();
  }

  //โหลดข้อมูลครู
  fetchTeacher() {
    this.api.getTeacher().subscribe((data: {}) => {
      this.dataTeacher = data;
      // console.log(data)
    });
  }

  //ฟังก์ชันบันทึกข้อมูลครู
  submitAddTeacher() {
    this.api.createTeacher(this.teacherAdd).subscribe((data: {}) => {});
    this.fetchTeacher(); //โหลดข้อมูล
    alert('บันทึกข้อมูลครูเรียบร้อย');
    this.teacherAdd = {
      tid: '',
      prefix: '',
      fname: '',
      lname: '',
      primary: '',
      email: '',
      password: '',
    };
  }

  //imagesArray : dataname[] = [];
  arrayText: any = [];

  tid: String;
  prefix: String;
  fname: String;
  lname: String;
  primary: String;
  email: String;
  password: String;

  //แสดงขอมูลครู
  detailTeacher(id) {
    this.arrayText = [{}];
    //console.log(this.teacherDetail);
    this.api.getTeacherById(id).subscribe((data) => {
      console.log(data);
      this.arrayText.push(data);
      console.log(this.arrayText);

      this.tid = this.arrayText[1].tid;
      this.prefix = this.arrayText[1].prefix;
      this.fname = this.arrayText[1].fname;
      this.lname = this.arrayText[1].lname;
      this.primary = this.arrayText[1].primary;
      this.email = this.arrayText[1].email;
      this.password = this.arrayText[1].password;
    });
    // alert(id);
  }

  //บันทึกข้อมูลแก้ไขครู
  submitEditTeacher() {
    this.api
      .editTeacher(this.teacherEdit.tid, this.teacherEdit)
      .subscribe((data: {}) => {});
    this.fetchTeacher(); //โหลดข้อมูล
    alert('บันทึกการแก้ไขข้อมูลครู');
    this.teacherEdit = {
      tid: '',
      prefix: '',
      fname: '',
      lname: '',
      primary: '',
      email: '',
      password: '',
    };
  }

  //แสดงข้อมูลแก้ไขครู
  editTeacher(id) {
    //alert(id);
    this.arrayText = [{}];
    this.api.getTeacherById(id).subscribe((data) => {
      console.log(data);
      this.arrayText.push(data);
      console.log(this.arrayText);

      this.teacherEdit.tid = this.arrayText[1].tid;
      this.teacherEdit.prefix = this.arrayText[1].prefix;
      this.teacherEdit.fname = this.arrayText[1].fname;
      this.teacherEdit.lname = this.arrayText[1].lname;
      this.teacherEdit.primary = this.arrayText[1].primary;
      this.teacherEdit.email = this.arrayText[1].email;
      this.teacherEdit.password = this.arrayText[1].password;
    });
  }

  //ฟังก์ชั้นลบข้อมูลครู
  deleteTeacher(id) {
    if (window.confirm('ลบข้อมูลครู รหัส' + id)) {
      this.api.deleteTeacher(id).subscribe((data: {}) => {
        this.fetchTeacher(); //โหลดข้อมูล
      });
    }
    //alert(id);
  }
}
