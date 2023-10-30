import { RobotEyes, RobotHands } from "./CustomRobots";


export class AdverseActionHands extends RobotHands {
  clickLogOut() {
    this.clickLogOutIcon("Logout-Icon");
  }
  clickOnAdverseActionInNav() {
    this.clickAdverseActions("Adverse Actions");
  }
  clickLogOutButton() {
    this.clickOnButtonWithId("button Logout");
  }
}

export class AdverseActionView extends RobotEyes {
  seesAdverseText() {
    this.containsText("Adverse Actions");
  }
  seesStatus() {
    this.containsText("SCHEDULED");
  }
  seesLogOutText() {
    this.containsText("Confirm Logout");
  }
  seesLogOutBtn(){
    this.seesByButtonText("Logout")
  }
}
