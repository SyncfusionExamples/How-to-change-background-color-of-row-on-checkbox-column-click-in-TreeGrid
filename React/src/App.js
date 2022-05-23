import {
  ColumnDirective,
  ColumnsDirective,
  Inject,
  TreeGridComponent,
} from '@syncfusion/ej2-react-treegrid';
import { Page } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
export default class App extends React.Component {
  checkboxChange(args) {
    if (args.checked) {
      setTimeout(() => {
        const checkedRows = this.element.querySelectorAll('.e-check');
        Array.from(checkedRows).map((row) => {
          row.closest('tr').classList.add('bgcolor');
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
  }
  render() {
    return (
      <TreeGridComponent
        dataSource={sampleData}
        treeColumnIndex={1}
        childMapping="subtasks"
        enableCollapseAll="true"
        autoCheckHierarchy="true"
        checkboxChange={this.checkboxChange}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="taskID"
            headerText="Task ID"
            width="90"
            textAlign="Right"
          />
          <ColumnDirective
            field="taskName"
            showCheckbox="true"
            headerText="Task Name"
            width="180"
          />
          <ColumnDirective
            field="startDate"
            headerText="Start Date"
            width="90"
            format="yMd"
            textAlign="Right"
            type="date"
          />
          <ColumnDirective
            field="duration"
            headerText="Duration"
            width="80"
            textAlign="Right"
          />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </TreeGridComponent>
    );
  }
}
