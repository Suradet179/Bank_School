import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/components/api/student/student.service';
import { AuthorityEnum } from 'src/app/components/api/student/models/userinfo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  manageStudnetMenuList: any[];
  withdrawStudentMenuList: any[];
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.setManageStudentMenuList();
    console.log(this.studentService.userInfo);
  }

  setManageStudentMenuList() {
    this.manageStudnetMenuList = [
      {
        title: 'จัดการข้อมูลนักเรียน ป.1',
        link: '/main/list-student1',
        authority: AuthorityEnum.T1,
      },
      {
        title: 'จัดการข้อมูลนักเรียน ป.2',
        link: '/main/list-student2',
        authority: AuthorityEnum.T2,
      },
      {
        title: 'จัดการข้อมูลนักเรียน ป.3',
        link: '/main/list-student3',
        authority: AuthorityEnum.T3,
      },
      {
        title: 'จัดการข้อมูลนักเรียน ป.4',
        link: '/main/list-student4',
        authority: AuthorityEnum.T4,
      },
      {
        title: 'จัดการข้อมูลนักเรียน ป.5',
        link: '/main/list-student5',
        authority: AuthorityEnum.T5,
      },
      {
        title: 'จัดการข้อมูลนักเรียน ป.6',
        link: '/main/list-student6',
        authority: AuthorityEnum.T6,
      },
    ];
    if (this.studentService.userInfo.authority !== AuthorityEnum.ADMIN) {
      const newMnu = this.manageStudnetMenuList.filter(
        (menu) => menu.authority === this.studentService.userInfo.authority
      );
      this.manageStudnetMenuList = newMnu;
    }
  }

  setWithdrawStudentMenuList() {}
}
