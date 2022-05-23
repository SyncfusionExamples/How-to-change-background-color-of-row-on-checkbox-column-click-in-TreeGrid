//@ts-nocheck
import { TreeGrid } from '@syncfusion/ej2-treegrid';
let sampleData: Object[] =  [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        approved: false,
        subtasks: [
            { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true },
            { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    }
];

let treeGridObj: TreeGrid = new TreeGrid({
        checkboxChange(args:any) {
          debugger;
          if (args.checked) {
            setTimeout(() => {
              const checkedRows = this.element.querySelectorAll('.e-check');
              Array.from(checkedRows).map((row) => {
                row?.closest('tr')?.classList.add('bgcolor');
              });
            }, 0);
          } else {
            setTimeout(() => {
              const coloredRows = this.element.querySelectorAll('.bgcolor');
      
              Array.from(coloredRows).map((row) => {
                if (row.querySelector('.e-uncheck') || row.querySelector('.e-stop')) {
                  row.classList.remove('bgcolor');
                }
              });
            }, 0);
          }
        },
    dataSource: sampleData,
    childMapping: 'subtasks',
    treeColumnIndex: 1,
    enableCollapseAll: true,
    autoCheckHierarchy: true,
    allowSelection: true,
    selectionSettings: { persistSelection: true },
    columns: [
        {
          field: 'taskID',
          headerText: 'Task ID',
          isPrimaryKey: true,
          width: 70,
          textAlign: 'Right',
        },
        {
          field: 'taskName',
          headerText: 'Task Name',
          showCheckbox: true,
          width: 180,
          textAlign: 'Left',
        },
        {
          field: 'startDate',
          headerText: 'Start Date',
          width: 90,
          textAlign: 'Right',
          type: 'date',
          format: 'yMd',
        },
        {
          field: 'duration',
          headerText: 'Duration',
          width: 80,
          textAlign: 'Right',
        },
        {
          field: 'progress',
          headerText: 'Progress',
          width: 80,
          textAlign: 'Right',
        },
        { field: 'priority', headerText: 'Priority', width: 90 },
      ],
    height: 380
});

treeGridObj.appendTo('#TreeGrid');