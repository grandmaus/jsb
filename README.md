# JSB project

## Schedule

| Topic                           | Due date     |
| ------------------------------- | ------------ |
| Architecture and design pitches | October 10th |
| Dataset management              | October 14th |
| Chart management                | October 21st |
| HTTP                            | October 24th |
| Feature exchange                | October 31st |
| Final                           | November 4th |

## Architecture and design

#### Stage goals

The main goal of this stage is to prepare an initial proposal on:

1.  Modules that the application should consist of
2.  Communication between modules

#### List of modules

When performing software design activities for this project, please, keep in mind the following modules:

| Name               | Description                                             |
| ------------------ | ------------------------------------------------------- |
| Dataset management | Module thats responsible for adding/removing x/y points |
| Chart              | DOM-based dataset representation                        |
| Features           | Set of features that can be applied to a dataset        |

#### General requirements and constraints 

1. Pure Javascript, no frameworks or helper libraries (e.g lodash, jQuery)
2. No asset bundling (e.g no Webpack)
3. No CSS pre/post processing 
4. No adaptive optimizations required

####Dataset management requirements and contsraints

1. User should be able to:

   - Add a pair of points to a dataset
   - Remove a pair of points from dataset
   - Clear  dataset

2. Dataset series should follow the interface:

   ```json
   {
     "x":[5,16,20],
     "y":[63,66,68]
   }
   ```

3. Dataset should have the ability to be loaded from external data source (AJAX or any other) as well as ability to save its contents to an external storage (AJAX/WebStorage).

#### Chart requirements and contstraints

1. Chart dimensions are 500x500 pixels
2. Chart should be implemented using DOM-objects (no SVG or 2D canvas as well as any helper libraries)
3. No need to connect the dots on chart (although, doing so would be a plus)
4. Chart grid is optional.

#### Reference materials

1. [Software design with SOLID](https://medium.com/webbdev/solid-4ffc018077da)
2. [JS module pattern](https://coryrylan.com/blog/javascript-module-pattern-basics)
3. [OOP in JS](http://jsraccoon.ru/es6-classes)
4. [Closures](https://learn.javascript.ru/closures-module)
5. [Intro to MVC](https://blog.codinghorror.com/understanding-model-view-controller/)

