<script>
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Page } from '@syncfusion/ej2-vue-treegrid';
let dataSource = [{
  taskID: 1, taskName: 'Planning', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), progress: 100, duration: 5, priority: 'Normal', approved: false,
  subtasks: [
    { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
    { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, approved: true },
    { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'), endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
    { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'), endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
  ]
},
{
  taskID: 6, taskName: 'Design', startDate: new Date('02/10/2017'), endDate: new Date('02/14/2017'), duration: 3, progress: 86, priority: 'High', approved: false,
  subtasks: [
    { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
    { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
    { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
    { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
    { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
  ]
},
{
  taskID: 12, taskName: 'Implementation Phase', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', approved: false, duration: 11,
  subtasks: [
    {
      taskID: 13, taskName: 'Phase 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'High', approved: false, duration: 11,
      subtasks: [{
        taskID: 14, taskName: 'Implementation Module 1', startDate: new Date('02/17/2017'), endDate: new Date('02/27/2017'), priority: 'Normal', duration: 11, approved: false,
        subtasks: [
          { taskID: 15, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
          { taskID: 16, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
          { taskID: 17, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
          { taskID: 18, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
          { taskID: 19, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
          { taskID: 20, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Low', approved: true }
        ]
      }]
    }]
}];

export default {
  name: "App",
  // Declaring component and its directives
  components: {
    'ejs-treegrid': TreeGridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
  },
  data() {
    return {
      data: dataSource,
      pageSettings: { pageSize: 7 }
    };
  },
  provide: {
    treegrid: [Page]
      },
  methods:{
     checkboxChange(args) {
        if (args.checked) {
          setTimeout(() => {
            const checkedRows = document.querySelectorAll('.e-check');
            Array.from(checkedRows).map((row) => {
              row.closest('tr').classList.add('bgcolor');
            });
          }, 0);
        } else {
          setTimeout(() => {
            const coloredRows = document.querySelectorAll('.bgcolor');

            Array.from(coloredRows).map((row) => {
              if (row.querySelector('.e-uncheck') || row.querySelector('.e-stop')) {
                row.classList.remove('bgcolor');
              }
            });
          }, 0);
        }
      }

  }
};

</script>
<template>
  <ejs-treegrid ref="treegrid" :dataSource='data' :treeColumnIndex='1' childMapping='subtasks' :checkboxChange=this.checkboxChange :enableCollapseAll="true"
    :autoCheckHierarchy="true" :pageSettings='pageSettings'>
    <e-columns>
      <e-column field='taskID' headerText='Task ID' textAlign='Right' width=70></e-column>
      <e-column field='taskName' headerText='Task Name' textAlign='Left' showCheckbox='true' width=200></e-column>
      <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
      <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
    </e-columns>
  </ejs-treegrid>
</template>
<style>
.bgcolor td{
  background-color:cadetblue !important;
  color:antiquewhite !important;
}
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-treegrid/styles/material.css";
</style>