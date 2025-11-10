 pom-design.md
 POM Design — Lecture 11 Homework
 1. Identified duplication

From Lecture 10 homework, several selectors and actions repeat across the tests:

Session Submission Tests:

#session-format, #topic-*, #level-*, #materials, #code-of-conduct, #submit-proposal

Common actions: .goto(), .selectOption(), .check(), .setInputFiles(), .click(), .toHaveURL()

These appear multiple times across both positive and negative scenarios.

Table Moderation Tests:

tbody tr, thead th, #total-count, row-specific Approve and Decline buttons.

Dialog handling (alert, confirm) appears twice.

Repeated steps for counting rows, verifying headers, and checking total count.

2. Session submission flow

Intent: Fill and submit a summit session proposal, then verify the confirmation summary.

Proposed APIs:

SessionFormPage

goto() — open registration form

selectSessionFormat(formatValue) — choose session type

selectTopics(topicsArray) — check one or more topic boxes

selectAudienceLevel(levelValue) — choose audience level (radio)

uploadFiles(filePaths) — attach one or more files

acceptCodeOfConduct() — check the conduct box

submitForm() — click submit button

SessionConfirmationPage

getSuccessMessage() — read header or main message

getFormat() — get selected format

getTopics() — get all chosen topics

getAudienceLevel() — get the selected level

getUploadedFiles() — list attached files

 3. Submissions table flow

Intent: Review submitted sessions, approve or decline speakers, and verify total count.

Proposed APIs:

SubmissionsTablePage

goto() — open the submissions page

getHeaderTexts() — return all column names

getRowCount() — count visible table rows

getTotalCount() — read number from #total-count

findRowBySpeaker(speakerName) — locate a row for given speaker

approveSpeaker(speakerName) — handle alert, update status

declineSpeaker(speakerName) — handle confirm, remove row

getStatusForSpeaker(speakerName) — read status text from row

 4. Benefits of POM

Removes repeated selectors and boilerplate code.

Test files read like business scenarios.

Easier to maintain when locators change.

Separation of test logic and UI interaction logic.