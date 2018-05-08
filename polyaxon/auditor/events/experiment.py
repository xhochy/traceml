import auditor
from event_manager.events import experiment

auditor.subscribe(experiment.ExperimentCreatedEvent)
auditor.subscribe(experiment.ExperimentUpdatedEvent)
auditor.subscribe(experiment.ExperimentDeletedEvent)
auditor.subscribe(experiment.ExperimentViewedEvent)
auditor.subscribe(experiment.ExperimentStoppedEvent)
auditor.subscribe(experiment.ExperimentResumedEvent)
auditor.subscribe(experiment.ExperimentRestartedEvent)
auditor.subscribe(experiment.ExperimentCopiedEvent)
auditor.subscribe(experiment.ExperimentNewStatusEvent)
auditor.subscribe(experiment.ExperimentSucceededEvent)
auditor.subscribe(experiment.ExperimentFailedEvent)
auditor.subscribe(experiment.ExperimentResourcesViewedEvent)
auditor.subscribe(experiment.ExperimentLogsViewedEvent)
auditor.subscribe(experiment.ExperimentStatusesViewedEvent)
auditor.subscribe(experiment.ExperimentJobsViewedEvent)

auditor.subscribe(experiment.ExperimentJobViewedEvent)
auditor.subscribe(experiment.ExperimentJobResourcesViewedEvent)
auditor.subscribe(experiment.ExperimentJobLogsViewedEvent)
auditor.subscribe(experiment.ExperimentJobStatusesViewedEvent)
