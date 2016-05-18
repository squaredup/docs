# Web API Plugin – 1.0

The Web API plugin allows you to pull data from external web sources and display this data as a scalar or tabular value. For example, retrieving a list of open incidents from ServiceNow or displaying figures from a CRM database.

This brief guide will walk you through two example uses of the plugin and aims to explain the various options available.

## Configuration
### Mode
The Web API plugin has two modes which control how the plugin authenticates with the external API.

* Simple: No Authentication or Basic authentication using a username/password
* OAuth: Token-based authentication 

Using the Simple mode we can pull back data from an external source and display this with ease but for many APIs, such as ServiceNow, require authentication. OAuth is an authorization pattern that allows applications to access web services by delegating authentication to the service.

### Method

Both GET and POST requests are available through the Web API plugin. The documentation for your web service will indicate which is needed although typically this will be the GET request. 

###URL

This is the URL of the external web service and contain query parameters, e.g. https://myservice/?filter=customers

### Headers & Data

The Web API plugin allows you to send additional data to the web service along with your request in the form of headers & data. Headers are HTTP headers and in the context of this plugin, are typically used for authentication or specifying content types such as JSON.

You are also able to add additional data fields which are sent with the request. For a  GET request these are sent as query string parameters whereas for a POST request, they are sent in the request body.

###
Display Options

You can choose to display the external data as either scalar, tabular or raw.
* **Scalar**: a single value such as a number of customers or incidents.
* **Tabular**: a simple table of data, e.g. incidents.
* **Raw**: this allows you to define a Mustache template (similar to the custom labelling within Squared Up) and hence you can define exactly what you want your data to look like. A few sample templates are included within this documentation.

With the scalar and raw display modes, there are some advanced options: formatter and template.  

A formatter is a small piece of JavaScript that allows you to process your data prior to displaying it. This may be, for example, to convert a timestamp into a date or perform some calculations.

The template is a Mustache template (similar to the custom labelling within Squared Up) and hence you can define exactly what you want your data to look like. A few sample templates are included within this documentation.

## Example Usage

This section includes two example uses of the plugin which demonstrates the available options.

### JSON Placeholder Service

http://jsonplaceholder.typicode.com/ is a JSON REST API used for testing services and this examples demonstrates how you would retrieve data from this API and show it using Squared Up.
1.	Visit http://jsonplaceholder.typicode.com/posts
a.	The data shown is a list of posts which we can show in Squared Up as a table.
2.	Create a new dashboard and select a Web API section.
3.	Select the simple mode and the GET method.
4.	Paste the web address from step 1 into the URL box.
5.	Press Next.
6.	Press Next to skip the Headers & Data section.
7.	Select the tabular display option.
8.	Boom! The data from the external API is now being shown within Squared Up as a table.

It’s important to note that this data will refresh along with the rest of your dashboard and is great for showing tabular data such as a list of open support tickets or configuration changes.

### ServiceNow
This next example demonstrates how you can pull a list of open incidents from your ServiceNow instance and display them within Squared Up. Here we demonstrate the OAuth method, Headers & Data and additionally how to construct raw Mustache templates.

**Pre-requisites**

-	ServiceNow, minimum Fuji version. 
-	Create a web service account in ServiceNow (see Appendix 1)
-	Create a CORS rule in ServiceNow (see Appendix 2)
-	Create 
**Configuration**

1.	#### GET API URL ###
2.	Create a new dashboard and select a Web API section.
3.	Select the OAuth mode and the GET method.
4.	Paste the URL you have constructed in Step 1 into the URL box.
5.	Click to add a new OAuth provider (this will open in a new window).
6.	Click add new provider (top right)
7.	Enter a unique ID, e.g. servicenow
8.	Enter the following fields:
a.	Authorisation Url: https://<instance>.service-now.com/oauth_token.do
b.	Token Url:
c.	Client Id:
d.	Client Secret: