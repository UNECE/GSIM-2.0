**For a detailed list of specific changes, please view the excel version of the change log [here](https://github.com/UNECE/GSIM-2.0/raw/main/Changes%20since%20GSIM%20v1.2/GSIM%20change%20log%202023%20for%20v2_0%20(updated%202023-12-22).xlsx)**

**The rest of this pages gives an overview of the main changes to GSIM, from v1.2 to v2.0...**

[1. Base Group](#1-Base-Group) |
[2. Business Group](#2-Business-Group) |
[3. Concepts Group](#3-Concepts-Group) |
[4. Exchange Group](#4-Exchange-Group) |
[5. Structures Group](#5-structures-group) |

# 1. Base Group
## 1.1 Main changes since GSIM version 1.2
The Base Group provides features that are reusable by other classes to support functionality such as identity and versioning. 

For the comparison with the previous version of GSIM (v1.2), the main changes to the model include: 
* GSIM information class added: _Software Agent_
* GSIM information class removed: _Event Change Tuple_
* Relationships added: between 1) _Change Event_ and _Process Step_; 2) _Change Event_ to _Identifiable Artefact_, 3) _Identifiable Artefact_ and _Referential Metadata Subject_, 4) _Identifiable Artefact_ and _Referential Metadata Attribute_

Below, in the UML diagram for this group, changes since version 1.2 of GSIM are marked in red.
![Alt text here](UML%20Diagrams%20with%20changes/GSIM%20Base%20change%20v2.drawio.png) 

# 2. Business Group
## 2.1 Main changes since GSIM version 1.2
For the comparison with the previous version of GSIM (v1.2), the main changes to the model include: 
* GSIM information class added: _Reference Document_
* GSIM information class names changed: _Core Input_ (was called Transformable Input in v1.2), _Core Output_ (was called _Transformed Output_ in v1.2)

Below, in the UML diagram for this group, changes since version 1.2 of GSIM are marked in red.
![Alt text here](UML%20Diagrams%20with%20changes/GSIM%20Business%20changes%20v2.drawio.png) 

# 3. Concepts Group
## 3.1 Main changes since GSIM version 1.2
For the comparison with the previous version of GSIM (v1.2), the main changes to the model include: 
* Relationship updated: 1) between _Data Point_ and _Population_ (this relationship existed between _Dimensional Data Point_ in v1.2); 2) between _Data Point_ and _Unit_ (this relationship existed between _Unit Data Point_ in v1.2); 3) "has measure/attribute/identifier" relationship between _Data Point_ and _Instance Variable_ replaced with "populates"
* Composition relationship added from _Instance Variable_ to _Data Set_

Below, in the UML diagram for this group, changes since version 1.2 of GSIM are marked in red.
![Alt text here](UML%20Diagrams%20with%20changes/GSIM%20Concepts%20changes%20v2.drawio.png) 

# 4. Exchange Group
## 4.1 Main changes since GSIM version 1.2
For the comparison with the previous version of GSIM (v1.2), the main changes to the model include: 
* GSIM information class added: 1) _Register_; 2) _Exchange Specification_; 3) _Dissemination Instrument_; 
* GSIM information class removed: 1) _Administrative Register_; 2) _Statistical Register_; 3) _Protocol_ 
* GSIM information class renamed: _Exchange Instrument_ (previously _Exchange Channel_ in GSIM v1.2) 

Below, in the UML diagram for this group, changes since version 1.2 of GSIM are marked in red.
![Alt text here](UML%20Diagrams%20with%20changes/GSIM%20Exchange%20changes%20v2.drawio.png) 

# 5. Structures Group
## 5.1 Main changes since GSIM version 1.2
For the comparison with the previous version of GSIM (v1.2), the main changes to the model include: 
* GSIM information class added: _Information Structure_
* GSIM information class removed: 1) _Dimensional Data Point_; 2) _Dimensional Data Set_; 3) _Unit Data Point_; 4) _Unit Data Set_ 
* GSIM information class names changed: _Data Record_ (was called _Unit Data Record_ in v1.2)

Below, in the UML diagram for this group, changes since version 1.2 of GSIM are marked in red.
![Alt text here](UML%20Diagrams%20with%20changes/GSIM%20Structures%20changes%20v2.drawio.png) 


Tabular

* ***Definition***

| **Class** | **Group** | **Definition** | **Explanatory Text** | **Synonyms** |
| --- | --- | --- | --- | --- |
| Process Support Input | Business | _Process Input_ that influences the work performed by the _Process Step Instance_ by providing additional information that affects the way _Core Input_ is used | _Process Support Input_ is a sub-type of _Process Input_.<br/>- Examples of _Process Support Inputs_ could include: A technical or methodological handbook which can be used as a reference to assist the work performed (e.g. data editing, coding and classification)<br/>- An auxiliary _Data Set_ which will influence imputation for, or editing of, a primary _Data Set_ which has been submitted to the _Process Step_ as the Core Input<br/>- A _Provision Agreement_ which can be used as a supporting document<br/>- A repository or inventory of _Process Methods_ or software system / architecture that are approved in the _Organisation_ that could be used as reference

* ***Attributes***

1. Key changes are described in the table below:

| **Group** | **Main changes** |
| --- | --- |
| Base | Refactoring of Change Event and related classes, i.e. how information about changes is maintainedSpecific changes include:<br/>- GSIM information class added: _Software Agent_<br/>- GSIM information class removed: _Event Change Tuple_<br/>- Relationships added: between 1) _Change Event_ and _Process Step_; 2) _Change Event_ to _Identifiable Artefact_, 3) _Identifiable Artefact_ and _Referential Metadata Subjec_t, 4) _Identifiable Artefact_ and _Referential Metadata Attribute_ |
| Business | Refactoring input/output specification of Process Steps and added Reference Document as a class<br/>Specific changes include:<br/>- GSIM information class added: _Reference Document_<br/>- GSIM information class names changed: _Core Input_ (was called _Transformable Input_ in v1.2), _Core Output_ (was called _Transformed Output_ in v1.2) |
| Concepts | (Minor) changes to associations between classes<br/>Specific changes include:<br/>- Relationship updated: 1) between _Data Point_ and _Population_ (this relationship existed between _Dimensional Data Point_ in v1.2); 2) between _Data Point_ and _Unit_ (this relationship existed between _Unit Data Point_ in v1.2); 3) "has measure/attribute/identifier" relationship between _Data Point_ and _Instance Variable_ replaced with "populates"<br/>- Composition relationship added from _Instance Variable_ to _Data Set_ |
| Exchange | Remodelling Exchange Channel and related classes providing better separation between specification, implementation and information being exchanged<br/>Specific changes include:<br/>- GSIM information class added: 1) _Register;_ 2) _Exchange Specification_; 3) _Dissemination Instrument;_<br/>- GSIM information class removed: 1) _Administrative Register;_ 2) _Statistical Register_; 3) _Protocol_<br/>- GSIM information class renamed: _Exchange Instrument_ (previously _Exchange Channel_ in GSIM v1.2) |
| Structures | Refactoring Referential Metadata and related classes based on use cases, e.g. quality indicators(Minor) refactoring of Data Point/Set and related classes<br/>Specific changes include:<br/>- GSIM information class added: _Information Structure_<br/>- GSIM information class removed: 1) _Dimensional Data Point_; 2) _Dimensional Data Set_; 3) _Unit Data Point_; 4) _Unit Data Set_<br/>- GSIM information class names changed: _Data Record_ (was called _Unit Data Record_ in v1.2) |


