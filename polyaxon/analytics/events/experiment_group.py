import analytics
from event_manager.events import experiment_group

analytics.subscribe(experiment_group.ExperimentGroupCreatedEvent)
analytics.subscribe(experiment_group.ExperimentGroupUpdatedEvent)
analytics.subscribe(experiment_group.ExperimentGroupDeletedEvent)
analytics.subscribe(experiment_group.ExperimentGroupViewedEvent)
analytics.subscribe(experiment_group.ExperimentGroupStoppedEvent)
analytics.subscribe(experiment_group.ExperimentGroupResumedEvent)
analytics.subscribe(experiment_group.ExperimentGroupFinishedEvent)
analytics.subscribe(experiment_group.ExperimentGroupExperimentsViewedEvent)
analytics.subscribe(experiment_group.ExperimentGroupIterationEvent)
analytics.subscribe(experiment_group.ExperimentGroupRandomEvent)
analytics.subscribe(experiment_group.ExperimentGroupGridEvent)
analytics.subscribe(experiment_group.ExperimentGroupHyperbandEvent)
analytics.subscribe(experiment_group.ExperimentGroupBOEvent)
