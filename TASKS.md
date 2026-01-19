# Challenge

Welcome to the challenge!

Some packages are already being installed for you below - you can just start reading the below text while that finishes.

## The Introduction

The following script takes you through tasks you should complete as part of your challenge. Some tasks may be tricky, some may be easy. In every case you are encouraged to pose written questions to the task itself, write down questions/observations or reasoning about why you did not find a solution. In most cases though, a working solution will be achievable. In all cases it will be helpful if add notes about your methodology (e.g.: "I did X using Y because of Z, then A happened which I fixed doing B. I should have seen A coming but didn't because of C").

There will be no loop with the reviewer, so nobody is going to answer your notes, questions, musings, ... - their main aim is to showcase your thought process for a fellow developer who will inspect this challenge. For the texts you can write everything from a bullet list to a book, but be aware that in development we usually try to optimize for a combination of dense information + understandability by every team member. We firmly believe that good communication and conceptualization is as important to being a developer as the coding itself.

The challenge tries to be similar to the real-world with the kinds of problems and solutions that would occur in every-day-project-work. There will be no questions asking you to optimize runtime-complexity in O-notation to the max for algorithm Y - these sort of questions do not make any sense in our opinion. Being close to the real-world also means that you may bring in CSS/JS Libraries to help you develop, just make sure that everything still runs in stackblitz.

The tool we use here is called `stackblitz`. It functions as a fully integrated development environment (IDE). You can go through the full challenge here. If you want to use your local environment you can also download the project using the small "cloud icon" at the top left corner of the screen, just right of "Project". _In the end, the challenge code must run in here inside `stackblitz`, so `pnpm run dev` has to work. If this is not the case, we will not be able to review your challenge!_

## Tech-Stack

You can skip this section and revisit it later, as the right information will be shared with you at the right places and everything should "just work" as we inteded it to work. If you still want to learn more right now, read on!

This is a "fullstack" TypeScript project using nuxt3 + vue3. Fullstack TypeScript means that we use one typescript code base for both the backend API + the frontend webapp. We have defined helper commands for development, testing, running the app in production, linting, ... that are runnable via `pnpm run X` where X is the command, checkout the `package.json` for more.

For styling we use TailwindCSS, so far the zoo has not added a CSS component framework to use pre-made components, maybe you will? For testing we use `vitest`, for linting `eslint`.

This information will also be shared with you where needed as part of the challenge, so there is no need to dive into anything at all for now.

## The Challenge

So, without further ado: Welcome, new IT Director of the Cologne Zoo! As you can see, the zoo dashboard was badly damaged by the recent malware attacks from the Duisburg Zoo. The old IT Director quit after that attack as he just could not take it anymore. The staff is looking to you to fix this mess and bring the zoo dashboard back to its former glory! 🐻 🐵 Sadly the IT-Department has been underfunded for years before the attack - so the application is quite dated.

---

### Task 1: Take stock of the repository

In a first step you should inspect the health of the project and report on everything you notice while doing so. This will help you determine what repairs are necessary in the coming steps.

Please take stock of the page using developer tools, your instincts, ... and write down below what you find.

<span style="color:green"> **solution** </span>

- Quick overview shows

  - Types file with type of Animal
  - Fake Animal Data generated using faker.js
  - Table that displays list of animals
  - Utility function to calculate age of the animal and unit test file.

- On running `pnpm run dev`, an error message saying _alert is not defined_ with status code **500**
- Alert() is a method available on browser and not defined for server/node.js
- Under Networks tab in developer tools, a failed **GET** request for `content-type: text/html;charset=utf8` with status code **500** can be seen.

  ***

### Task 2: Get the basics running again

Now that we know that is broken, let's try to get things running again, step by step. First we should aim to just get the project to start. Please fix the problem that stops `pnpm run dev` from working out. Then:

- document the loaded page with a brief description,
- document the problems that needed to be resolved to make it work (so that we can avoid and quicker fix them in the future!)

Zookeepers reported that the error sometimes changes when reloading the page after the initial start.

<span style="color:green"> **solution** </span>

- Removed `alert('get wrecked cologne zoo!');` from **app.vue** file that was blocking the page to render at the server side.
- Content successfully displayed on the screen after removing alert from the code.
- admin contact email is not formatted correctly -> fixed it in app.vue file.
- Animal list not displayed, failed to fetch from the server.
- Investigating server/api directory shows a typo in animal.get.ts file -> fixed the typo to fetch animals correctly
- The data is displaying but the column age has timestamp data instead of a number -> upon inspecting it shows the column is populated by birth date and not age.
- Name field is missing
- Animal id not being generated at creation time and missing.
- No `README.md` file to guide a developer through the codebase

  ***

### Task 3: Start the documentation

You got it to work! Nice, now the basic functionality is back for the zookeepers. This would be a great point to start on documenting the project. As you can see there is not even a readme file! The old IT Director seems to have left this project in bad shape. Please add documentation with basics on the project, how to start, stop, test, ... it and whatever else information you deem important.

Add your solution below, either as an inline text or link to new documentation file(s) you've created.

<span style="color:green"> **solution** </span>

**For Starters**

- Heading/Title
- Project Description
- Tech stack
- Steps to reproduce for development
- Project Structure
- Testing and Development
  - Available scripts
  - Steps to Test Locally
- Support

  ***

### Task 4: Test fixing

There's a failing test that for the age calculation helper. Can you figure out what is broken in the implementation or the test it is and resolve the problem? All zookeepers are really interested in what is going on here.

<span style="color:green"> **solution** </span>

- The test case was correct, but the difference in milliseconds was 0. So fixed implementation to return minimum age as 1 year when the difference is 0. Also used Math.ceil() to round up non zero values as well.
- Returned result of `Math.max(1, Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365)))` in useCalculateAgeInYears.ts file.

  ***

### Task 5: UI Fixing and Improvement

The zookeepers report that the table is incomplete and different than usually. More specifically:

- they are missing the `Name` column that used to be in _third_ place,
- the table is sorted by weight, it used to be sorted by name,
- the age of the animals should show the age in years and not the birthdate
  - a composable for this already exists, made by the previous zookeeper

Please fix the two above problems and outline what was necessarry to do so.

<span style="color:green"> **solution** </span>

- Added Name column in third place in table, destructured from the animals array.
- Sorted it by name by comparing uppercase letters in the compare function in sort method.
- Added an age property to each animal object in the sorted array using array map method.
- Age calculation is pre-computed and not on each render.

  ***

### Task 6: UI Feature 1

The zookeepers want to be able to see all details of an animal. Please create such a view that allows them to do so, outline anything about your process while adding the view below. The zookeepers didn't have time for more information, sorry. They'll surely be glad to criticize the first version intensly though and will want to know why you went for the approach you chose.

<span style="color:green"> **solution** </span>

- Displayed all available details in the table -> this allows zookeeper to view all the details of an animal at one place -> To-Do: To minimize table view to important fields and move other details to modal/new view for detailed view to avoid cognitive overload.
- Added columns
  - Height
  - Favourite Food

**EDIT**

1. Adding `id: string` to type Animal in types.ts
2. Generating `uuid` for each animal in `fakeData.ts` file while creating fake animal.
3. Create `pages` folder, and in that an `animals` folder. create `[id].vue` file.
4. used `useState()` inside useAnimal composable instead of ref to use it globally.
5. Created `index.vue` under pages, and moved the logic from `app.vue` to here.
6. Moved details and calculation from _table page_ to newly created page _id page_.
7. Used route based logic to navigate between pages
8. Updated CSS

   ***

### Task 7: Logic Feature

The zookeepers want a new feature: Calculate the food required for the next calendar month. Basically, the zookeepers want to ease their job and buy a month worth of food in advance. In order to do so they want you to calculate and display the food all animals need for the next month.

To calculate the food an animal needs in kilograms in 1 day, the zookeepers use the following formula:

1. Take height + weight and divide it by 250
2. If the animal is:
   - older than 20 years, half the required food,
   - younger than 2 years, double the required food
3. Cherrys have less calories, so if the favourite fruit of the animal are cherries, add 28 kg
4. If the animal is male, add 20 %
5. If the animal is a fish: The required food is 0 kg

<span style="color:green"> **solution** </span>

- Food for fish is straight up 0kg.
- Assuming the same sequence for the logic from formula 1 to 4. Change in the order of execution, changes the final outcome of arithemic operations.
- The logic is defined in the utility function in file `/utils/useCalculateRequiredFood.ts`.
- Unit test cases are present in the test file in `/utils/useCalculateRequiredFood.test.ts`.
- Assuming 31 days in each month, easier for zookeepers to maintain/order and we don't want our animals to go hungry, right!?
- Keeping upto two decimal places for the required monthly food.

  ***

### Task 8: Plan New Feature

After the disastrous specification of the new UI feature in the previous task, the zooplanners now want to sit down with you to plan the next feature better before implementation begins. Together you come up with requirements that you write down from the user-perspective (the zookeepers):

- I want to plan when to feed which animal,
- Per animal I want to be able to plan a day + a fruit that I feed them
- There should be an overview of all upcoming feeding tasks that tells me:
  - the animal name,
  - the food fruit,
  - the required amount of food
- the required amount of food is calculated using the algorithm from the previous task
- Tasks should be grouped by day, so that I have something like a "todo" list for each day
  - so for exmaple a structure like:
    - 24.03.2012
      - Anni, Bananas, 20kg
      - Belfried, Cherries, 10kg
    - 27.03.2012
      - ...
    - ...

Please create a breakdown for this feature. You can focus on aspects like: What tasks do we need to cover, what should their order be, how will the UI/UX be designed, what questions arise from the potentially inconsistent or incomplete staff requirements?

Don't spend more thatn 15-30 minutes here - planning like this can quickly become quite complex and we want to prevent this challenge taking too much of your time!

<span style="color:green"> **solution** </span>

### 1. Feature Goal (User Perspective)

As a zookeeper, I want to plan when and what to feed each animal, and see a clear daily overview of upcoming feeding tasks with the correct amount of food required.

- I can assign feeding plans per animal
- I can see a grouped daily todo list
- I can prepare food in advance without manual calculations

### 2. Functional Scope

**Current scope**

- Plan feeding per animal
- Select:
  - A date
  - A fruit
- Automatically calculate required food amount (kg)
- Show grouped daily feeding tasks
- Read-only overview

**Future scope**

- Feeding time in a day
- Multiple feedings per animal per day
- Inventory/stock management
- Feeding completion tracking
- Permissions / roles

### 3. Basic Types (1st Draft)

**FeedingTask**

```
type FeedingTask = {
  id: string
  animalId: string
  date: Date
  fruit: Fruit
}
```

### 4. Major Tasks & Suggested Order

**1. Clarify Requirements (Critical)**

- Confirm

  - If one feeding per animal per day is allowed
  - If same animal can be fed on consecutive days
  - Is the fruit selected in the planner always the favourite fruit?
  - Or should it override the favourite fruit for that day?

- Confirm date handling
  - Timezone assumptions
  - Are past dates allowed or not

**2. The Logic**

- Reuse existing logic:

  - useCalculateAgeInYears
  - useCalculateRequiredFood

- Create Unit-test cases

**3. State Management**

- Decide where feeding plans are stored

  - local state (current)
  - API-backed storage (future)

- Store feeding tasks as an array of task objects
- Create selector
  - group tasks by date
  - sort dates ascending
  - sort animals alphabetically per day
  - sort daily tasks by time (future scope)

### 4. UI/UX Design

- Use Design Thinking Principles

  - Understand the user. Empathize!
  - List down user's pain points

- Create Wireframes

  - Draw a rough UI
  - Sketch or use tools keeping design standards and Gestalt principles in mind

- Create Mockups and prototype

  - Create UI designs in Figma or Adobe XD, or any other tool
  - Create UI design prototypes

- UI/UX Testing with the uesr
  - Perform Moderated Testing
  - Perform A/B Testing

**_A. Feeding Planning UI_**
**Purpose**: Create feeding tasks
**Elements**

- Animal selector (dropdown/search)
- Date picker
- Fruit selector
- “Add feeding task” button

**UX considerations**

- Prevent duplicate entries (same animal + same day)
- Show instant preview of required food

**_B. Feeding Overview UI (Main Feature)_**
**Layout**

- 24.03.2012
  - Anni, Bananas, 20kg
  - Belfried, Cherries, 10kg
- 27.03.2012
  - Leo — Apples — 15 kg

**Design choices**

- Grouped by day (accordion or sectioned list)
- Clear typographic hierarchy:
  - Date as header
  - Animal name emphasized
- Units always visible (kg)

### 6. Open Questions/Risks Discussion

- Inconsistent Requirements
  - Should cherry bonus apply if cherries are chosen even if not favourite?
  - Should amount of food change if an animal is sick?
- Edge Cases
  - What happens if an Animal dies or removed?
  - Multiple zookeepers editing simultaneously?
- Scalability
  - Hundreds of animals?

### 7. Acceptance Criteria and Final Meeeting with Zookeepers (User)

- Discuss the documented/translated requirements with the users for its accuracy
- Discuss the process and UI acceptance
- Discuss the integration of app with their daily routine

`This will help prevent another disastrous specification.`

---

### Task 9: Finish the documentation

Revisit docs from step 3, see if you want to add anything. Also think about bonuses. Add a general comment about anything (inside the universe of the challenge or out of it) if you want to.

<span style="color:green"> **solution** </span>

**After Updating**
Added features and Contribution Guidelines section

- Heading/Title
- Project Description
- Tech stack
- Steps to reproduce for development
- Project Structure
- Testing and Development
  - Available scripts
  - Steps to Test Locally
- Features
- Contribution Guidelines
- Support
