namespace CPMS.Core.Dtos
{
    public abstract class Employee
    {
        public int EmployeeNo { get; set; }
        public string? FirstName { get; set; }
        public string? MiddileName { get; set; }
        public string? LastName { get; set; }
        public string? Initials { get; set; }
        public int PhoneNo { get; set; }      
    }

    public class MedicalRep : Employee
    {
        public int EmployeeTypeId { get; set; }
        public int DistributorId { get; set; }
        public int AreaId { get; set; }
        public int RangeId { get; set; }
        public int ZoneId { get; set; }
        public int SupervisorId { get; set; }
    }

    public class SalesRep : Employee
    {
        public int EmployeeTypeId { get; set; }
        public int DistributorId { get; set; }
        public int AreaId { get; set; }
        public int RangeId { get; set; }
        public int ZoneId { get; set; }
        public int SupervisorId { get; set; }
    }

    public class BrandManager : Employee
    {
        public int EmployeeTypeId { get; set; }
    }

    public class BrandCoordinatior : Employee
    {
        public int EmployeeTypeId { get; set; }
    }


}
