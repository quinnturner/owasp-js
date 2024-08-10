# Monitoring logging using OWASP vocabulary

`owasp/vocab` provides a set of standard events to log for monitoring and alerting purposes. The intent is to simplify monitoring and alerting such that, assuming developers trap errors and log them using this vocabulary, monitoring and alerting are improved by keying on these terms.

Here are some example implementations using popular logging and alerting tools:

> [!NOTE]
> Listing these tools does not imply OWASP's endorsement or promotion. The examples provided are for illustrative purposes only. Always refer to the official documentation of the respective tools for detailed instructions.

## Datadog

1. **Send Logs to Datadog**: Ensure your logs are being sent to Datadog.
1. **Create a Log Search**: Use the Datadog log search to find specific event properties.

   **Example Datadog query:**

   ```txt
   event:malicious_direct_reference:*
   ```

1. **Create a Monitor**: Set up a log monitor based on the search query.

**Example Monitor Configuration:**

- **Alert Condition**: When the count of matching logs exceeds 0 in a 5-minute window.
- **Notifications**: Configure email, Slack, or other alerting channels.

## Kibana

1. **Send Logs to Elasticsearch**: Ensure your logs are being sent to Elasticsearch.
2. **Create a Kibana Dashboard**: Go to the Kibana dashboard and create a new visualization.
3. **Define the Query**: Use the Kibana query language (KQL) to search for specific event properties.

   **Example Kibana query:**

   ```txt
   event: "malicious_direct_reference:*"
   ```

4. **Create an Alert**: Use Kibana's alerting feature to set up alerts based on the query.

**Example Alert Configuration:**

- **Trigger**: When the event count exceeds 0 within a 5-minute window.
- **Actions**: Send notifications via email, Slack, or other channels.

## New Relic

1. **Send Logs to New Relic**: Ensure your logs are being sent to New Relic.
1. **Create a Log Query**: Use the New Relic query language (NRQL) to search for specific event properties.

**Example NRQL query:**

```sql
SELECT count(*) FROM Log WHERE event LIKE 'malicious_direct_reference:%'
```

1. **Create an Alert**: Set up an alert condition based on the query.

**Example Alert Condition:**

- **Trigger**: When the query result is greater than 0 within a 5-minute window.
- **Actions**: Configure email, Slack, or other notifications.

## Sentry

1. **Send Logs to Sentry**: Ensure your logs are being sent to Sentry.
2. **Set Up Alerts**: Use Sentry's alerting feature to monitor for specific event properties.

   **Example Sentry Alert Rule:**

   - **Filter**: Events with the tag `event` containing `malicious_direct_reference:*`.
   - **Trigger Condition**: When the event occurs more than 0 times in a 5-minute window.
   - **Actions**: Send notifications via email, Slack, or other integrations.

## Splunk

1. **Send Logs to Splunk**: Ensure your logs are being indexed in Splunk.
2. **Create a Splunk Search**: Use the Splunk search language to find specific event properties.

   **Example Splunk query:**

   ```txt
   index=your_index sourcetype=your_sourcetype "event=malicious_direct_reference:*"
   ```

3. **Create an Alert**: Set up an alert based on the search query.

**Example Alert Configuration:**

- **Trigger Condition**: When the number of matching events is greater than 0 within a 5-minute window.
- **Actions**: Configure email, Slack, or other notifications.

## SumoLogic

1. **Navigate to the SumoLogic Dashboard**: Go to the SumoLogic dashboard and create a new monitor.
2. **Define the Query**: Use a query to search for the specific event property.

   **Example SumoLogic query:**

   ```txt
   _sourceCategory=your/source/category
   | json field=_raw "event"
   | where event matches "malicious_direct_reference:*"
   | count by event
   ```

3. **Create an Alert Condition:** Define the alert condition based on the query results.
4. **Set Alert Thresholds:** Specify thresholds to trigger alerts.
5. **Configure Notifications:** Set up email, Slack, or other notifications.

   **Example Alert Condition:**

   ```txt
   | where event matches "malicious_direct_reference:*"
   | count by event
   | sort by _count desc
   | if (_count > 0) {
       alert "Malicious Direct Reference Detected"
       severity = "critical"
       description = "A malicious direct reference was detected in the logs."
   }
   ```
