exports.applyAuditFields = (body, user, isNew = false) => {
  if (isNew) {
    body.created_by = user?.email || 'system';
  }
  body.updated_by = user?.email || 'system';
  return body;
};
