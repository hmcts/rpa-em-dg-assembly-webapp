import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { GovukFormlyTemplatesModule } from '@hmcts/govuk-formly-templates';
import { AssemblyViewerComponent } from './assembly-viewer.component';
import { FormViewerComponent } from './form-viewer/form-viewer.component';
import { FormatSelectorComponent } from './form-viewer/format-selector/format-selector.component';
import { AssemblyService } from '../shared/assembly.service';
import { DocumentViewerModule } from '@hmcts/document-viewer-webcomponent';

class MockAssemblyService {
  getUIDefinition() {}
}

describe('AssemblyViewerComponent', () => {
  let component: AssemblyViewerComponent;
  let fixture: ComponentFixture<AssemblyViewerComponent>;

  const mockAssemblyService = new MockAssemblyService();

  const uiDefintion = [
    {
      'key': 'caseReference',
      'type': 'input',
      'hideExpression': null,
      'templateOptions': {
        'label': 'Case reference',
        'options': []
      },
      'fieldArray': null
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AssemblyViewerComponent,
        FormViewerComponent,
        FormatSelectorComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FormlyModule,
        GovukFormlyTemplatesModule,
        DocumentViewerModule
      ],
      providers: [
        { provide: AssemblyService, useFactory: () => mockAssemblyService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyViewerComponent);
    component = fixture.componentInstance;
    component.outputFormats = ['PDF'];
    spyOn(mockAssemblyService, 'getUIDefinition').and.returnValue(of(uiDefintion));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});