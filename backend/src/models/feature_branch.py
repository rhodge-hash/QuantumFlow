from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from ..database import Base

class FeatureBranch(Base):
    __tablename__ = "feature_branches"

    id = Column(Integer, primary_key=True, index=True)
    branch_name = Column(String, index=True)
    task_id = Column(Integer, ForeignKey("tasks.id"))

    task = relationship("Task", back_populates="feature_branch")
