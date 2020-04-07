# AWS Cloud Practitioner Essentials - Cloud Concepts
- AWS Training and Certification
- Completed May 1, 2019
---
## Product Services and Categories
### Compute
- Amazon EC2, Amazon Lightsail, Amazon VPC, AWS Batch, AWS Elastic Beanstalk, AWS Lambda, Auto Scaling, etc.

### Storage
- Amazon S3, Amazon EBS, Amazon Elastic File System, Amazon Glazier, AWS Storage Gateway, etc.

### Database
- Amazon Aurora, Amazon RDS, Amazon DynamoDB, Amazon Redshift, AWS Database Migration Service, etc.
	
### Security, Identity & Compliance
- AWS Identity & Access Management, AWS Key Management Service, AWS Shield, AWS WAF, AWS Directory Service, etc.
				
### etc.
	
## AWS Global Infrastructure
### Regions
 - geographic areas that host two or more availability zones
	
### **Availability Zones** (AZs) - collection of data centers within specific regions
- Each availibilty zone is physically distinct and has it's own:
	- uniterruptible power supply
	- cooling equipment
	- backup generator
	- network connectivity
- Isolating them protects from failures
- Best practice: provision your data among multiple availability zones
	
###	**Edge Locations** host the content delivery network (CDN) - Amazon Cloudfront
- Delivers content to customers
- Delivered fast
- Typically located in highly populated areas
		
## Amazon Virtual Private Cloud (VPC)
### A private, virtual network in the AWS Cloud
- Uses the same concepts as on premise networking
		
###	Allows complete control of network configutation
- Ability to isolate and expose resource inside VPC
		
### Offer several layers of security controls
- Ability to allow and deny specific internet and internal traffic
		
### Other AWS sevices deploy into the VPC
- Services inherent security built into the network
		
### Features
- Builds upon high availability of AWS Regions and Availability Zones (AZ)
	- Amazon VPC lives within a region
	- Multiple VPCs per account
- **Subnets**
	- Used to divide Amazon VPC
	- Allows Amazon VPC tp span multiple AZs
- **Route Tables**
	- Control traffic going out of the subnets
- **Internet Gateway** (IGW)
	- Allows paccess to the internet from Amazon
- **NAT Gateway**
	- Allows private subnet resourcces to access the Internet
- **Network Access Control Lists** (NACL)
	- Control access to subnets
	- Stateless

###	Sample VPC
- Select a region
- Create the VPC, name it and define the IP address space
	- Test-VPC -10.0.0.0/16 is the classless inner domain routing format and means that you have over 65,000 ip addresses to use in the VPC
- Create a subnets and assign Availability Zones
	- Subnet A1 - 10.0.0.0/24 means that you have 256 ip addresses
	- Subnet B1 - 10.0.0.0/23 means that you have 512 ip addresses
- Add an Internet Gateway to allows subnets to access the internet
	- Test-IGW
- Next Steps
  - Learn about Route Tables and isolation methods
  - Learn about other Amazon VPC like VPC Endpoints and Peering Connections
  - Learn about Security Groups
  - Learn about Amazon Elastic Cloud Compute (EC2)
  - Learn about Amazon Relational Database Service (RDS)
				
### Security Groups
- One of the highest proprites
- Security groups act like virtual firewalls for your virtual servers
-	Control accessibility
-	Security group roles are used to control who has access to resources
	
### Compute Services
- AWS is flexible and cost effective
-	Amazon EC2 is highly scalable
-	AWS Lambda allows you to run code without managing servers; pay only for the compute time you use; no administration
-	Amazon Lightsail for simple web ad application servers; includes virtual machine, SSD-based storage, data transfer, DNS management and a static ip address
-	Amazon ECS is a managed conrtainer service that supports Docker containers
	
### Amazon Elastic Compute Cloud (EC2)
- Can be used for application server, web server, database server, game server, mail server, mail server, media server, catalog server
		file server, computing server, proxy server, etc.
		
## Amazon EC2 Instances
- pay as you go
- broad selection of hardware and software
- global hosting
- and more
- To create an EC2 instance
  - Login to the AWS console
  - Choose a region
  - Launch the EC2 wizard
  - Select the Amazon Machine Image (AMI) (software platform)
  - Select the instance type (hardware)
  - Configure network
  - Configure storage
  - Configure key pairs (allow connecting to the instance)
  - Launch and connect
- The default user is ec2-user
		
## AWS Lambda
- **AWS Lambda** is a compute service that lets you run code without provisioning or managing servers
- Fully-managed serverless compute
- Event-driven execution
- Sub-second metering
- Multiple languages supported
- Benefits
	- You only pay for the compute that you use; ideal for variable and intermittent workloads
	- No servers to manage
	- Continuous scaling
	- Subsecond metering
	- Languages supported include:
		- Node.js, Java,C# and Python
-	Getting started
	- Upload your code to AWS Lambda
	- Set up your code to trigger from other AWS services, HTTP endpoint, or in-app activity
	- Lmbda runs your code only when triggered, using only the compute resources needed
	- Pay just for the compute time you use
- Intended to support serverless and microservices applications
-	Configuration options:	
	- Disk space is limited to 512 Mb
	- Memory allocation from 128 Mb to 1536 Mb
	- Function execution is limited to a maximum of 5 minutes
	- Contrained by the deployment package size and the maximum number of file descriptors
	- Request and response body payload cannot exceed 6 Mb
	- Event request body is limited to 128 Kb
	- Number of concurrent executions is a soft limit which cna be increased upon request
	- Billed on the number of times your code is triggered and each 100 mS of executon time
-	Use cases
	- Automated backups
	- Processing objects uploaded to S3
	- Event driven log analysis
	- Event drivien transformations
	- Internet of things (IoT)
	- Operatting serverless websites
		
- You can use AWS Lambda and Amazon Kinesis to process real time streaming data, application activity tracking, transaction auto-processing, 
		click stream analysis, data cleansing metrics, generational log filtering, indexing social media analysis, and device data telemetry and metering
		
## AWS Elastick Beanstalk
- Platform as a Service (PaaS) that allows you to quickly get up and running in the cloud
- Allows quick deployment of your applications
- Reduces management complexity
- Keeps control in your hands
	- Choose your instance type
	- Choose your database
	- Set and adjust Auto Scaling
	- Update your application
	- Access server log files
	- Enable HTTPS on load balancer
- Supports a large range of platforms
	- Packer Builder									
- Single Container, Multicontainer or Preconfigured Docker
  - Java SE
	- PHP
  - Java with Tomcat
  - Python
	- .Net on Windows Server w/ IIS
	- Ruby
	- Go			
	- Node.js
- Easily Implementent
	- Elastic Beanstalk provides:
		- Host
		- HTTP Service
		- Language Interpreter
		- Application Service
		- Operating System
	- You provide your code
- Update your application as easily as you deployed it
- Can use the AWS console and command line and scripts
```
        +----- Update version ------------------------------+
        v                                                   |
     Create             Upload           Launch           Manage
  ApplicationApp  ====> Version  ==>  Environment  ==> Environment
        |                                                   ^
        +---> Deploy new version----------------------------+
```
													
## Application Load Balancer
- Replaces the Classic Load Balancer
- Enhanced features include:
	- Supported Protocols - supports HTTP, HTTPS, HTTP/2 and WebSockets
	- CloudWatch Metrics - additional load balance metrics and Group metric dimension
	- Access Logs - ability to see connection details for WebSocket connections
	- Target Health Checks - insight into target and application health at more granular level
- Addiitional Features
	- Path and Host-based Routing
		- Path-based provides rules that forward requests to different target groups based on url in the request
		- Host-based can be used to define rules that forward requests to different target groups based on host name
			- allows you to have multiple domains hosted by the same load balancer
	- Native IPv6 Support
	- AWS WAF (Web Application Firewall)
	- Dynamic Ports
		- Amazon EC2 Container Service (ECS) integrate with Application Load Balancer to expose Dynamic Ports utilized by scheduled containers
	- Deletion Protections & Request Tracing
		- Request tracing can be used to track HTTP requests from clients to target
- Use Cases
	- Using containers to host your microsrervices and route to those containers from a single load balancer
	- You can route different requests to the same instance but differ the path by specifying the port
- Key Terms
	- Listener - A process that checks for connection requests using the protocol and port that you configure.
		- You define rules that determine how the load balancer routes requests to the targets in one or more target group
	- Target - A destination for traffic based on the established listener rules
	- Target Group - Routes requests to one or more registerd targets using the protocol and port numbner specified.
		- A target can be registered with more than one target group
		- Healt checks can be configured on a per target basis
- Create the Load Balancer from the EC2 AWS console
- You must select at least two Availability Zones
	
## Elastic Load Balancer (Classic)
- Distributed software load balancing service 
	- Multiple Availability Zones
	- Sticky Sessions
	- Health Checks
	- Cross-zone Balancing
- Use cases
	- Access through single point
	- Decouple application environment
	- Provide high availability and fault tolerance
	- Increase elasticity and scalability
- Traffic Distribution depends on the type of request
	- HTTP/HTTPS => Least Outstanding
	- TCP => Round Robin
- It can help with distributing traffic across multiple Availability Zones
	- This feature is enabled by default when launched by the management console
	- If launched through the command line or SDK then this will need to be enabled as a secondary process
- Provides a single exposed endpoint to provide access to backend services
- Sticky sessions bind a user's session for duration of a session
	- Set dependent on if you want to use duration-based cookies or application controlled sticky sessions
- Monitoring
	- View HTTP responses
	- See the number of healthy and unhealthy hosts
	- FIlter metrics based on Availability Zones or load balancer (done with a simple ping request)
- Will scale based on the traffic that it receives
- Types of Load Balancers
	- Internet-Facing
	- Internal (DNS name resolves only to private node)
- The default metric interval for CloudWatch is 5 minutes

## Auto Scaling
-------------------
- Helps ensure that you have the correct number of Amazon EC2 Instances available to handle the load for your application
- Important to use CloudWatch to monitor your resource performance, but it will not add or remove EC2 Instances
- Capacity Management
- Allows you to add or remove instances autotmatically based on conditions that you supply
- Allows you to maintain performance while minimizing costs
- Critical Questions:
	- Scalability - How can I ensure that my workload has enough EC2 resources to meet fluctuating performance requirements?
	- Automation - How can I automate EC2 resource provisioning to occur on-demand?
- Scaling Out - when new EC2 instances are launched (added)
- Scaling In - when EC2 instances are terminated
- Autoscaling Components
	- Create a Launch Configuration (What?)
		- AMI (Amazon Machine Image)
		- Instance type
		- Security Groups
		- Roles
	- Create an Auto Scaling Group (Where?)
		- VPC and Subnet(s)
		- Load balancer
		- Minimum instances
		- Maximum instances
		- Desired capacity
	- Define at Leach Auto Scaling Policy (When?)
		- Scheduled
		- On-demand
		- Scale-out policy
		- Scale-in policy
- Common configuration is to create CloudWatch alarms based on performance information of your EC2 instances or load balancer
	
## Amazon Elastic Block Store (EBC)
- Choose between HDD and SSD types
- Persistent and customizable block storage for EC2 intances
- Replicated in the same Availability Zone  (High availability)
- Backup using Snapshots (High durability) - You can recreate a new volume from a snapshot at any time.
- Easy and transparent Encryption (no additional cost)
- Elastic volumes (Can not only change size, but can change from from HDD to SSD)
- Actually much more durable the HDD or SSD because of block-level replication
- Magnetic storage is cheaper
- EBS Instance must be created in the same Availability Zone where the EC2 Instance resides
- If volume is detached it will remain in the available state
	
## Amazon Simple Storage Service (SS3)
- Managed cloud storage service
- Designed for data that is accessed frequently
- Store virtually unlimited number of objects
- Access any time, from anywhere
- Rich security features
- Buckets are associated with a Region and is redundantly stored across AWS facilities in your selected Region
- Designed for seamless scaling
- Also will scale for a high volume of requests
- You can access the S3 by:
	- AWS Management Console
	- AWS CLI
	- AWS SDK
	- REST endpoints
- S3 bucket names must be globally unique and DNS compliant
- Object keys should use characters that are safe for urls
- Common use cases:
	- Storing application assets
	- Static web hosting
	- Backup and recovery (Can even be configured to support cross region replication.)
	- Staging are for Big Data
	- Many more ...
- Charged per PUT, COPY, POST, LIST and GET
- From command line you can cp, sync, ls, etc.)
- You must initiate the server side encrytion
	
## Amazon Glacier
- Low cost managed data archiving service 
- Designed for storing cold data, that is data that is infrequently accessed
- Long-term storage at low cost
- 99.999999999% durability (by redundantly storing data on a device and on different devices within a facility)
- Access limited by vault policies (with IAM)
- Archive is any object (ex. photo, video, file or document) base unit of storage that has an id (and optional description)
- Vault is a container for storing archives (has a name and region)
	- Each vault can have one vault access policy and one block lock policy attached to it
- Access Policies determine who can and can't access the data and what actions they can perform
- Only a few operations are available through the AWS Management Console
	- Creating and managing vaults
	- Creating and managing archive policies
- All other operations are accessed though
	- RESTful web service
	- Java or .Net SDKs
	- Amazon S3 with life cycle policies
- Restoring data
	- Bulk: 5-12 hours
	- Standard: 3-5 hours
	- Expedited: 1-5 minutes
- Charges per UPLOAD and retrieval
- Cost per request and per GB
- Files are encrypted by default with AES-256
- Glacier manages keys for you (If you need to manage your own keys you can encrypt it before uploading)
