# Web Development Project 4 - *Discover Cats*

Submitted by: **Nour Amri**

This web app: **allows users to discover random cats using TheCatAPI, showing an image plus Breed, Origin, and Temperament. Users can click any shown attribute to add it to a visible ban list; future results exclude any banned values, and clicking a ban-chip removes it immediately.**

Time spent: **1.5** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image is consistent across API calls (**Breed, Origin, Temperament**)
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single result of an API call is displayed at a time 
  - Displayed attributes match the displayed image (e.g., if the image is a Ragamuffin, the breed shown is **Ragamuffin**)
  - There is at least one image per API call
- [x] **API call response results should appear random to the user**
  - Clicking on the API call button generates a seemingly random new result each time
  - Note: Repeat results are permitted but the API used has a large dataset so repeats are uncommon
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - At least one attribute for each API result is clickable (**all three are clickable**)
  - Clicking on a clickable attribute not on the ban list immediately adds it to the ban list 
  - Clicking on an attribute in the ban list immediately removes it from the ban list 
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Clicking on the API call button does not result in any image/attributes with attribute values in the ban list being displayed
  - Note: More attribute values on the ban list may result in a higher frequency of repeat results
  - [x] _To ensure an accurate grade, the recording shows that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes_

The following **optional** features are implemented:

- [x] Multiple types of attributes are clickable and can be added to the ban list (Breed, Origin, Temperament)
- [ ] Users can see a stored history of their previously displayed results from this session
  - [ ] A dedicated section of the application displays all the previous images/attributes seen before
  - [ ] Each time the API call button is clicked, the history updates with the newest API result

The following **additional** features are implemented:



## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='[http://i.imgur.com/link/to/your/gif/file.gif](https://i.imgur.com/jp0Ajfq.gif)' title='Video Walkthrough' width='' alt='Video Walkthrough' />


GIF created with kap

## Notes


## License

    Copyright 2025 Nour Amri

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
