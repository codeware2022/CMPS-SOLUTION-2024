using System;

namespace CPMS.Data.Models
{
    public class MedicalRep
    {
        public int EmployeeNo { get; set; }
        public int EmployeeTypeId { get; set; }
        public int DistributorId { get; set; }
        public int AreaId { get; set; }
        public int RangeId { get; set; }
        public int ZoneId { get; set; }
        public int SupervisorId { get; set; }
    }
}
