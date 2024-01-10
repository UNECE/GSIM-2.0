**For a detailed list of specific changes, please view the excel version of the change log [refer to this page](https://github.com/UNECE/GSIM-2.0/blob/42b3f8ea173fd31a451e25b110ba7979a6064e40/Changes%20since%20GSIM%20v1.2/Introduction.md)**
Changes since GSIM v1.2/GSIM change log 2023 for v2_0 (updated 2023-12-22).xlsx

[refer to this page3](../GSIM%20change%20log%202023%20for%20v2_0%20(updated%202023-12-22).xlsx)

[refer to this page4](../Changes%20since%20GSIM%20v1.2/GSIM%20change%20log%202023%20for%20v2_0%20(updated%202023-12-22).xlsx)

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
