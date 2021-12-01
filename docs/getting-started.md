---
sidebar_position: 1
---

# Welcome to Switchboard

Switchboard is an out of the box tool for building ETL jobs using serverless functions

#### Definitions

* Switchboard - The framework
* Switches - Individual uses of the framework that help accomplish a task.

## About

Convictional uses Switchboard to develop a number of open-source Switches. These Switches help our users accomplish a job to be done (JTBD) and Switchboard creates an easy way for the developer to focus on that JTBD.

Some sample switches:
* Word count :: Pull down product descriptions from the Convictional API. Counts the words and publishes the word count back onto the product.

## Getting Started

There are two ways to get started; either you are interested in deploying an existing switch, or you want to build a new one from scratch.

Each switch is broken down into three parts: Extract (E) --> Transform (T) --> Load (L). In each of the parts, you can write custom code, or use an out of the box tooling. Below is the list of out of the box functionality:

### Extract

* Get products / product from Convictional API
* Get product from AWS SQS

### Transform

This is typically unique for each switch.

### Load

* Patch product on Convictional API
* Publish to AWS SQS Queue


### More

As well out of the box, we include:
* Rate limiting for outbound API requests
* Version control on Convictional models
* Deployment scripts for [multiple setup types](https://google.com/setups)
