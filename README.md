# Performance Testing Workflow

This project contains a GitHub Actions workflow to run performance tests using ClinicJS and Autocannon. It also includes a test project with an endpoint that simulates a data handling process.

## Prerequisites

Ensure you have the following programs installed on your system:

- **Git**: [Download and install Git](https://git-scm.com/)
- **Node.js 20**: [Download and install Node.js 20](https://nodejs.org/)

## Installation

Follow these steps to install and set up the project on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/dfloresc/clinicjs-pipeline.git
cd clinicjs-pipeline
```

### 2. Install Node.js 20

If you do not have Node.js 20 installed, you can download and install it from [here](https://nodejs.org/). You can also use a Node.js version manager like `nvm`:

```bash
nvm install 20
nvm use 20
```

### 3. Install dependencies

Once you have Node.js 20 installed, install the project dependencies using `npm`:

```bash
npm install
```

## Usage

### 1. Start the test application

Start the application in development mode to test the pipeline:

```bash
npm serve
```

This will build and start the application at [http://localhost:3000](http://localhost:3000).

### 2. Test the `/process-simulator` endpoint

You can access the test endpoint at [http://localhost:3000/process-simulator](http://localhost:3000/process-simulator). This endpoint runs a process that handles data by creating random data, iterating, sorting, and grouping it to simulate a workload.

## Performance Testing

### Run tests with ClinicJS

ClinicJS is a performance analysis and diagnosis tool for Node.js. To run a test with ClinicJS Doctor:

```bash
npm run doctor
```

To run a test with ClinicJS Flame:

```bash
npm run flame
```

## GitHub Actions Workflow

This repository includes a GitHub Actions workflow to automate performance tests.

### Pipeline Execution

The pipeline runs automatically in the following situations:
- When creating a Pull Request.
- When committing to any branch.

### Pipeline Steps

1. **Run performance tests with ClinicJS Doctor and ClinicJS Flame**:
   - These tests analyze the application's performance and generate reports.

2. **Save assets as artifacts**:
   - The test results are stored as artifacts.

3. **Process and publish results with `performance-reporter`**:
   - This action processes the generated artifacts, publishes them on GitHub Pages, and comments on the Pull Request with links to the performance reports.

An example of this can be seen in [PR #2](https://github.com/dfloresc/clinicjs-pipeline/pull/2). In this PR, you can see an initial comment indicating the performance results of the unchanged version, followed by another comment showing the performance results after making specific changes to increase the processing time. You can click on the links in the comments to view the reports and compare the differences.

## Note on Publishing Results

This project uses GitHub Pages to publish performance test results, which is suitable for open-source projects. For private or different environments, it is recommended to use another provider that offers hosting and privacy, such as CloudFront, S3, or another private hosting service.
